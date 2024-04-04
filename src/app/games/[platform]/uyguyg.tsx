import { Metadata } from "next";
import Page from "./adad";
import { Platform } from "../../api/platform";

const platformCtrl = new Platform();

type Props = {
  params: { platform: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const platform = await platformCtrl.getBySlug(params.platform);

  return {
    title: platform?.attributes.title,
  };
}
export default Page;
