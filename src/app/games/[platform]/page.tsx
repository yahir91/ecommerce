import type { Metadata } from "next";
import { ENV } from "../../../utils/constants";
import PlatformPage from "./PlaftormPage";

type Props = {
  params: { platform: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(
    `${ENV.URL}/api/games/${params.platform}`
  );
  const { data } = await response.json();
  return {
    title: data?.platform?.attributes.title,
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: { platform: string };
  searchParams: { [page: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page || "1";

  const response = await fetch(
    `${ENV.URL}/api/games/${params.platform}?page=${page}`
  );
  const { data } = await response.json();

  return (
    <>
      <PlatformPage data={data} params={params} />
    </>
  );
};

export default page;
