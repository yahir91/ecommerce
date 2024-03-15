import type { Metadata } from "next";
import Page from "./page";

type Props = {
  params: { game: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(`http://localhost:3000/api/game/${params.game}`);
  const { data: parsedResponse } = await response.json();
  return {
    title: parsedResponse?.game?.attributes.title,
    description: parsedResponse?.game?.attributes.summary,
  };
}
export default Page;
