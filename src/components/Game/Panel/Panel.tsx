import { useState } from "react";
import { Button, Container, Icon, Image } from "semantic-ui-react";
import styles from "./Panel.module.scss";
import WishlistIcon from "../../Shared/WishListIcon/WishListIcon";
import { useCart } from "../../../hooks/useCart";
import { fn } from "../../../utils/functions";

const Panel = (props: any) => {
  const { gameId, game } = props;
  const [loading, setLoading] = useState(false);
    const { addCart } = useCart();

  const platform = game.platform.data;
    const buyPrice = fn.calcDiscountPrice(game.price, game.discount);

  const addCartWrapper = () => {
    setLoading(true);
    addCart(gameId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContiner}>
        <Image src={game.cover.data.attributes.url} alt="cover" />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>

          <div className={styles.moreInfo}>
            <span>
              <Image
                src={platform.attributes.icon.data.attributes.url}
                alt="icon"
              />
              {platform.attributes.title}
            </span>
            <span>
              <Icon name="check" />
              En stock
            </span>
          </div>

          <div className={styles.price}>
            {game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  {game.price}€
                </span>

                <span className={styles.discount}>-{game.discount}%</span>
              </>
            )}

            <span className={styles.price}>{buyPrice}€</span>
          </div>

          <Button primary fluid onClick={addCartWrapper} loading={loading}>
            Add to cart
          </Button>

          <WishlistIcon gameId={gameId} className={styles.heart} />
        </div>
      </div>
    </Container>
  );
};

export default Panel;
