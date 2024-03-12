import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";

const Info = (props: any) => {
  const { game } = props;

  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{game?.summary}</p>
      </div>

      <div className={styles.more}>
        <ul>
          <li>
            <span>Fecha de lanzamiento:</span> {game?.releaseDate}
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Info;
