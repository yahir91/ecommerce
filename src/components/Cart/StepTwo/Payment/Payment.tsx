import { CardElement } from "@stripe/react-stripe-js";
import styles from "./Payment.module.scss";

const Payment = () => {
  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090",
        },
      },
    },
  };

  return (
    <div className={styles.payment}>
      <h2>Métodos de pago</h2>

      <div className={styles.block}>
        <CardElement options={cardStyle} />
      </div>
    </div>
  );
};

export default Payment;
