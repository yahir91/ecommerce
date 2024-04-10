"use client";

import { useEffect, useState } from "react";
import { Game } from "../../../components/Game";
import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";
import { getGameBySlug } from "../../api/helper";


const GamePage = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await getGameBySlug(params.game);
      console.log(response);
      setData(response.data.game);
    })();
  }, [params.game]);

  const wallpaper = data?.attributes?.wallpaper;

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
