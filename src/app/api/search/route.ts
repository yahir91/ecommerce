import { type NextRequest } from "next/server";
import { Game } from "../../../api/game";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") ?? "1";
  const search = searchParams.get("s") ?? "";

  const gameCtrl = new Game();
  const response = await gameCtrl.searchGames(search, page);

  return Response.json({
    data: {
      games: response.data,
      pagination: response.meta.pagination,
      searchText: search,
    },
  });
};
