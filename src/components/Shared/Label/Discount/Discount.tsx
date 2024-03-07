import classNames from "classnames";
import styles from "./Discount.module.scss";

const Discount = (props: any) => {
  const { children, className } = props;

  return (
    <span
      className={classNames(styles.labelDiscount, { [className]: className })}
    >
      {children}
    </span>
  );
};

export default Discount;
