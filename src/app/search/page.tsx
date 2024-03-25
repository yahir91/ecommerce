import { ENV } from "../../utils/constants";
import SearchGame from "./Search";

const page = async ({
  searchParams,
}: {
  searchParams: {
    s: string | string[] | undefined;
    page: string | string[] | undefined;
  };
}) => {
  const page = searchParams.page ?? "1";
  const search = searchParams.s ?? "";
  const response = await fetch(
    `${ENV.URL}/api/search/?s=${search}&page=${page}`
  );
  const { data } = await response.json();
  return (
    <div>
      <SearchGame data={data} />
    </div>
  );
};

export default page;
