import { Container, Icon, SemanticICONS } from "semantic-ui-react";
import { map } from "lodash";
import { data } from "./BarTrust.data";
import styles from "./BarTrust.module.scss";

const BarTrust = () => {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {map(data, (item) => (
          <div className={styles.block} key={item.id}>
            <Icon name={item.icon as SemanticICONS} />
            <div>
              <h5>{item.title}</h5>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BarTrust;
