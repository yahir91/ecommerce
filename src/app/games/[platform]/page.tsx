"use client";

import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";
import { Separator } from "../../../components/Shared/Separator/Separator";
import GridGames from "../../../components/Shared/GridGames/GridGames";
import { useEffect, useState } from "react";
import NoResult from "../../../components/Shared/NoResult/NoResult";
import Pagination from "../../../components/Shared/Pagination/Pagination";
import { useSearchParams } from "next/navigation";

const PlatformPage = ({ params }: { params: { platform: string } }) => {
  const [data, setData] = useState<any>();
  const [hasProducts, sethasProducts] = useState(false);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await fetch(
        `../../api/games/${params.platform}?page=${page}`
      );
      const { data } = await response.json();
      setData(data);
      const hasProducts = size(data.games) > 0;
      sethasProducts(hasProducts);
    })();
  }, [params.platform, page]);

  return (
    <>
      {/* <Seo title={`Juegos de ${platform.attributes.title}`} /> */}

      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2 style={{ paddingLeft: 30 }}>{data?.platform.attributes.title}</h2>

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
              text={`La categoria ${data?.platform.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
};

export default PlatformPage;