"use server";
import { Metadata } from "next";
import { Game } from "../../api/game";
import GamePage from "./GamePage";
import { Suspense } from "react";

type Props = {
  params: { game: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(params.game);
  return {
    title: response.attributes.title,
    description: response.game?.attributes.summary,
  };
}

const page = async ({ params }: { params: { game: string } }) => {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(params.game);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamePage data={response} />
    </Suspense>
  );
};

export default page;
