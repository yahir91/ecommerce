import type { Metadata } from "next";
import Page from "./page";

type Props = {
  params: { platform: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(
    `http://localhost:3000/api/games/${params.platform}`
  );
  const { data } = await response.json();
  return {
    title: data?.platform?.attributes.title,
  };
}
export default Page;
