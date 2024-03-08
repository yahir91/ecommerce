import { Game } from "../../../../api/game";
import { Platform } from "../../../../api/platform";
import { type NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { platform: string } }
) => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") ?? "1";

  const platformCtrl = new Platform();
  const responsePlatform = await platformCtrl.getBySlug(params.platform);

  const gameCtrl = new Game();
  const responseGames = await gameCtrl.getGamesByPlatformSlug(
    params.platform,
    page!
  );

  return Response.json({
    data: {
      platform: responsePlatform,
      games: responseGames.data,
      pagination: responseGames.meta.pagination,
    },
  });
};
