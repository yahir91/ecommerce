import { type NextRequest } from "next/server";
import { Game } from "../../../../api/game";

export const GET = async (
  request: NextRequest,
  { params }: { params: { game: string } }
) => {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(params.game);

  console.log(response);

  return Response.json({
    data: {
      game: response,
    },
  });
};
