import { ENV } from "../../../utils/constants";
import GamePage from "./GamePage";

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
  // const gameCtrl = new Game();
  // const response = await gameCtrl.getBySlug(params.game);
  const filters = `filters[slug][$eq]=${params.game}`;
  const populate = `populate[0]=wallpaper&populate[1]=cover&populate&populate[2]=screenshots&populate[3]=platform&populate[4]=platform.icon`;
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filters}&${populate}`;

  const response = await fetch(url);
  const result = await response.json();

  if (response.status !== 200) throw result;

  // return result.data[0];
  return <GamePage data={result.data[0]} />;
};

export default page;
