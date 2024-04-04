"use server";
import { Metadata } from "next";
import { Game } from "../../api/game";
import GamePage from "./page";
import { Suspense } from "react";

// type Props = {
//   params: { game: string };
// };
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const gameCtrl = new Game();
//   const response = await gameCtrl.getBySlug(params.game);
//   return {
//     title: response.attributes.title,
//     description: response.game?.attributes.summary,
//   };
// }

const page = async ({ params }: { params: { game: string } }) => {
  const gameCtrl = new Game();
  console.log(params.game);
  const response = await gameCtrl.getBySlug(params.game);
  return (
    <Suspense fallback={<div>Loading...</div>}>
    </Suspense>
  );
};

export default page;
