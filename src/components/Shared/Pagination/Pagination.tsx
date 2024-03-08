import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.scss";
import { useCallback } from "react";

const Pagination = (props: any) => {
  const searchParams = useSearchParams();

  const { currentPage, totalPages } = props;
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onPageChange = (_: any, data: any) => {
    const { activePage } = data;
    router.replace(`?${createQueryString("page", activePage)}`);
  };

  return (
    <div className={styles.container}>
      <PaginationSU
        defaultActivePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;
