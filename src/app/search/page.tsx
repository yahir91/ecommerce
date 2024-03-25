import { Game } from "../api/game";
import SearchGame from "./Search";
const gameCtrl = new Game();

const page = async ({
  searchParams,
}: {
  searchParams: {
    s: string | undefined;
    page: string | undefined;
  };
}) => {
  const page = searchParams.page ?? "1";
  const search = searchParams.s ?? "";
  const response = await gameCtrl.searchGames(search, page);

  return (
    <div>
      <SearchGame
        data={{
          games: response.data,
          pagination: response.meta.pagination,
          searchText: search,
        }}
      />
    </div>
  );
};

export default page;
