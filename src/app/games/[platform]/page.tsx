"use client";

import { size } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import GridGames from "../../../components/Shared/GridGames/GridGames";
import NoResult from "../../../components/Shared/NoResult/NoResult";
import Pagination from "../../../components/Shared/Pagination/Pagination";
import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";

const PlatformPage = ({ params }: { params: { platform: string } }) => {
  const [data, setData] = useState<any>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await fetch(
        `../../api/games/${params.platform}?page=${page}`
      );
      const { data: parsedData } = await response.json();
      setData(parsedData);
    })();
  }, [params.platform, page]);

  const hasProducts = size(data.games) > 0;

  return (
    <BasicLayout relative>
      <Container>
        <Separator height={50} />

        <h2 style={{ paddingLeft: 30 }}>{data?.platform?.attributes.title}</h2>

        {hasProducts ? (
          <>
            <GridGames games={data.games} />
            <Separator height={30} />
            <Pagination
              currentPage={data?.pagination.page}
              totalPages={data?.pagination.pageCount}
            />
          </>
        ) : (
          <NoResult
            text={`La categoria ${
              data?.platform?.attributes.title ?? params.platform
            } aun no tiene productos`}
          />
        )}

        <Separator height={100} />
      </Container>
    </BasicLayout>
  );
};

export default PlatformPage;
