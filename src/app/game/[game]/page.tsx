"use client";

import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";
import { Game } from "../../../components/Game";
import { Game as GameCtrl } from "../../api/game";
import { useEffect, useState } from "react";

const gameCtrl = new GameCtrl();

const GamePage = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any>();

  console.log(params);

  useEffect(() => {
    const asyncFunction = (async () => {
      console.log("hi");
      const response = await gameCtrl.getBySlug(params.game);
      console.log(response);
      setData(response);
    })();
  }, [params.game]);

  const wallpaper = data?.attributes?.wallpaper;
  console.log(data);

  return (
    <>
      <BasicLayout>
        {data && (
          <>
            <Game.HeaderWallpaper image={wallpaper?.data.attributes?.url} />
            <Game.Panel gameId={data.id} game={data.attributes} />

            <Separator height={50} />

            <Game.Info game={data.attributes} />

            <Separator height={30} />

            <Game.Media
              video={data.attributes?.video}
              screenshots={data.attributes?.screenshots.data}
            />

            <Separator height={50} />
          </>
        )}
      </BasicLayout>
    </>
  );
};

export default GamePage;
