import { useState, useEffect, useCallback } from "react";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { forEach } from "lodash";
import styles from "./Resume.module.scss";
import { fn } from "../../../../utils/functions";

const Resume = (props: any) => {
  const { games } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [totals, setTotals] = useState<any>(null);

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0,
    };

    forEach(games, (game) => {
      const price = fn.calcDiscountPrice(
        game.attributes.price,
        game.attributes.discount
      );

      totals = {
        original: totals.original + game.attributes.price * game.quantity,
        discount:
          totals.discount + (game.attributes.price - price) * game.quantity,
        price: totals.price + price * game.quantity,
      };
    });

    setTotals(totals);
  }, [games]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const goToStepTwo = () => {
    router.replace(`?${createQueryString("step", "2")}`);
  };

  if (!totals) return null;

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>

      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Precio oficial</span>
            <span>{totals.original.toFixed(2)}€</span>
          </div>
          <div>
            <span>Descuento</span>
            <span>{totals.discount.toFixed(2)}€</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>{totals.price.toFixed(2)}€</span>
          </div>
        </div>

        <Button primary fluid onClick={goToStepTwo}>
          Proceder con el pago
        </Button>

        <Link href="/">Continuar comprando</Link>
      </div>
    </div>
  );
};

export default Resume;
