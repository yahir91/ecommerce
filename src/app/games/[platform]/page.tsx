"use server";

import { Metadata } from "next";
import { Game } from "../../api/game";
import { Platform } from "../../api/platform";

type Props = {
  params: { platform: string };
};

const platformCtrl = new Platform();
const gameCtrl = new Game();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const platform = await platformCtrl.getBySlug(params.platform);

  return {
    title: platform?.attributes.title,
  };
}

const page = async ({
  // params,
  // searchParams,
}: {
  params: { platform: string };
  searchParams: { [page: string]: string };
}) => {
  // const page = searchParams.page || "1";

  // const responsePlatform = await platformCtrl.getBySlug(params.platform);

  // const data = await gameCtrl.getGamesByPlatformSlug(params.platform, page!);

  return (
    <>
      {/* <PlatformPage
        data={{
          platform: responsePlatform,
          games: data.data,
          pagination: data.meta.pagination,
        }}
        params={params}
      /> */}
      <div>hola</div>
    </>
  );
};

export default page;
