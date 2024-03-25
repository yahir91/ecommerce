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

const SearchGame = ({ data }: any) => {
  const hasResult = size(data?.games) > 0;

  useEffect(() => {
    document.getElementById("search-games")?.focus();
  }, []);
  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />

          <h2 style={{ paddingLeft: 40 }}>Buscando: {data?.searchText}</h2>
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
