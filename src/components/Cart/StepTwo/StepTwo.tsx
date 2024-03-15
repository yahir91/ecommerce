import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Separator } from "@/components/Shared/Separator/Separator";
import { ENV } from "@/utils/constants";
import styles from "./StepTwo.module.scss";
import Addresses from "./Addresses/Addresses";
import Payment from "./Payment/Payment";
import Resume from "./Resume/Resume";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

const StepTwo = (props: any) => {
  const { games } = props;
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
          <Addresses
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
          />
          <Separator height={50} />
          {addressSelected && <Payment />}
        </div>

        <div className={styles.right}>
          <Resume games={games} addressSelected={addressSelected} />
        </div>
      </div>
    </Elements>
  );
};

export default StepTwo;
