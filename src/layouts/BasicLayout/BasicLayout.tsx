import { Container } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./BasicLayout.module.scss";
import { TopBar } from "../../components/Layout/TopBar/TopBar";
import Footer from "../../components/Layout/Footer/Footer";

export function BasicLayout(props: any) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props;

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />

      <Container>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  );
}
