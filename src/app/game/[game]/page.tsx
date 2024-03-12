"use client";

import { useEffect, useState } from "react";
import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";
import { Game } from "../../../components/Game";

const GamePage = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await fetch(`../../api/game/${params.game}`);
      const { data: parsedResponse } = await response.json();
      setData(parsedResponse);
    })();
  }, [params.game]);

  const wallpaper = data?.game?.attributes.wallpaper;
  return (
    <>
      {/* <Seo
          title={game.attributes.title}
          description={game.attributes.summary}
        /> */}

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
