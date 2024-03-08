"use client";

import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import { Separator } from "../../components/Shared/Separator/Separator";
import GridGames from "../../components/Shared/GridGames/GridGames";
import Pagination from "../../components/Shared/Pagination/Pagination";
import NoResult from "../../components/Shared/NoResult/NoResult";
import { useSearchParams } from "next/navigation";

const SearchGame = () => {
  const [data, setData] = useState<any>();
  const hasResult = size(data?.games) > 0;
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const search = searchParams.get("s") ?? "";

  //   useEffect(() => {
  //     document.getElementById("search-games").focus();
  //   }, []);

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await fetch(`../api/search/?s=${search}&page=${page}`);
      const { data } = await response.json();
      setData(data);
    })();
  }, [page, search]);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />

          <h2>Buscando: {data?.searchText}</h2>
          {hasResult ? (
            <>
              <GridGames games={data.games} />
              <Separator height={30} />
              <Pagination
                currentPage={data?.pagination.page}
                totalPages={data?.pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados" />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
};

export default SearchGame;
