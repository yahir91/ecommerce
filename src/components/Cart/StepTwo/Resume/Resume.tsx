import { useState, useEffect, useCallback } from "react";
import { Button } from "semantic-ui-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { forEach, map } from "lodash";
import { Cart } from "@/app/api/cart";
import { useAuth } from "@/hooks/useAuth";
import { fn } from "@/utils/functions";
import styles from "./Resume.module.scss";
import { useCart } from "../../../../hooks/useCart";

const cartCtrl = new Cart();

const Resume = (props: any) => {
  const { games, addressSelected } = props;
  const [total, setTotal] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { deleteAllItems } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let totalTemp = 0;

    forEach(games, (game) => {
      const price = fn.calcDiscountPrice(
        game.attributes.price,
        game.attributes.discount
      );
      totalTemp += price * game.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [games]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const goToStepEnd = () => {
    router.replace(`?${createQueryString("step", "3")}`);
  };

  const onPay = async () => {
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement: any = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    if (result.error) {
      console.error(result.error.message);
    } else {
      const response: any = await cartCtrl.paymentCart(
        result.token,
        games,
        user.id,
        addressSelected
      );

      if (response.status === 200) {
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("Error when making the payment");
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (!total) return null;

  return (
    <div className={styles.resume}>
      <h2>Resume</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {map(games, (game) => (
            <div key={game.id} className={styles.product}>
              <div>
                <p>{game.attributes.title}</p>
                <span>{game.attributes.platform.data.attributes.title}</span>
              </div>
              <span>
                {game.quantity > 0 && `${game.quantity}x`}
                {fn.calcDiscountPrice(
                  game.attributes.price,
                  game.attributes.discount
                )}
                €
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>{total}€</span>
        </div>

        <Button
          primary
          fluid
          disabled={!addressSelected}
          onClick={onPay}
          loading={loading}
        >
          Payment
        </Button>
      </div>
    </div>
  );
};

export default Resume;
