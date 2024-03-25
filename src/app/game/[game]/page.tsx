import { Game } from "../../../api/game";
// import { ENV } from "../../../utils/constants";
import GamePage from "./GamePage";

// type Props = {
//   params: { game: string };
// };
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const response = await fetch(`${ENV.URL}/api/game/${params.game}`);
//   const { data: parsedResponse } = await response.json();
//   return {
//     title: parsedResponse?.game?.attributes.title,
//     description: parsedResponse?.game?.attributes.summary,
//   };
// }

const page = async ({ params }: { params: { game: string } }) => {
  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(params.game);
  console.log(response);
  return <GamePage data={response} />;
};

export default page;
