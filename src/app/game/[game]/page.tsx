import { ENV } from "../../../utils/constants";
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
  const response = await fetch(`${ENV.URL}/api/game/${params.game}`);
  const { data } = await response.json();
  return <GamePage data={data} />;
};

export default page;
