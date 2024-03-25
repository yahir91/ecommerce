"use client";

import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";
import { Game } from "../../../components/Game";

const GamePage = ({ data }: any) => {
  const wallpaper = data?.game?.attributes.wallpaper;
  return (
    <>
      <BasicLayout>
        {data.game && (
          <>
            <Game.HeaderWallpaper image={wallpaper?.data.attributes.url} />
            <Game.Panel gameId={data.game.id} game={data.game.attributes} />

            <Separator height={50} />

            <Game.Info game={data?.game?.attributes} />

            <Separator height={30} />

            <Game.Media
              video={data?.game?.attributes.video}
              screenshots={data?.game?.attributes.screenshots.data}
            />

            <Separator height={50} />
          </>
        )}
      </BasicLayout>
    </>
  );
};

export default GamePage;
