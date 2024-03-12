import Basket from "./Basket/Basket";
import Resume from "./Resume/Resume";
import styles from "./StepOne.module.scss";

const StepOne = (props: any) => {
  const { games } = props;

  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket games={games} />
      </div>
      <div className={styles.right}>
        <Resume games={games} />
      </div>
    </div>
  );
};

export default StepOne;
