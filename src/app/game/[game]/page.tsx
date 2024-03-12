"use client";

import { useEffect, useState } from "react";
import { Separator } from "../../../components/Shared/Separator/Separator";
import { BasicLayout } from "../../../layouts/BasicLayout/BasicLayout";

const GamePage = ({ params }: { params: { game: string } }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const asyncFunction = (async () => {
      const response = await fetch(`../../api/game/${params.game}`);
      const { data: parsedResponse } = await response.json();
      setData(parsedResponse);
    })();
  }, [params.game]);
  return (
    <>
      {/* <Seo
          title={game.attributes.title}
          description={game.attributes.summary}
        /> */}

      <BasicLayout>
        {/* <Game.HeaderWallpaper image={wallpaper.data.attributes.url} />
          <Game.Panel gameId={game.id} game={game.attributes} />
  
          <Separator height={50} />
  
          <Game.Info game={game.attributes} />
  
          <Separator height={30} />
  
          <Game.Media
            video={game.attributes.video}
            screenshots={game.attributes.screenshots.data}
          /> */}

        <Separator height={50} />
      </BasicLayout>
    </>
  );
};

export default GamePage;
