import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.scss";

const Pagination = (props: any) => {
  const { currentPage, totalPages } = props;
  const router = useRouter();

  const onPageChange = (_: any, data: any) => {
    const { activePage } = data;

    router.replace(`?page=${activePage}`);
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
