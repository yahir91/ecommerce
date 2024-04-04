import { type NextRequest } from "next/server";
import { Game } from "../../game";

export const GET = async (
  request: NextRequest,
  { params }: { params: { game: string } }
) => {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(params.game);

  return Response.json({
    data: {
      game: response,
    },
  });
};
