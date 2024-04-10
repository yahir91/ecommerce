import { Game } from "./game";
import { Platform } from "./platform";

export const getPlatform = async (page: string, platform: string) => {
  const platformCtrl = new Platform();
  const responsePlatform = await platformCtrl.getBySlug(platform);

  const gameCtrl = new Game();
  const responseGames = await gameCtrl.getGamesByPlatformSlug(platform, page!);

  console.log(responseGames);

  return {
    data: {
      platform: responsePlatform,
      games: responseGames.data,
      pagination: responseGames.meta.pagination,
    },
  };
};

export const getGameBySlug = async (slug: string) => {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(slug);

  return {
    data: {
      game: response,
    },
  };
};
