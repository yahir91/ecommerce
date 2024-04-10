import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";
import styles from "./StepThree.module.scss";

const StepThree = () => {
  return (
    <div className={styles.stepThree}>
      <Icon name="check circle outline" />
      <h2>¡Paymenty Successfull!</h2>

      <Button as={Link} href="/account" primary>
        See Order
      </Button>
    </div>
  );
};

export default StepThree;
