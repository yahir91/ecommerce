import Link from "next/link";
import { map } from "lodash";
import styles from "./GridGames.module.scss";
import { Label } from "../../../Shared/Label";
import { fn } from "../../../../utils/functions";
import WishlistIcon from "../../../Shared/WishListIcon/WishListIcon";
import { Image } from "semantic-ui-react";

const GridGames = (props: any) => {
  const { wishlist, onReload } = props;

  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.attributes.game.data;
        const cover = game.attributes.cover.data;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`game/${game.attributes.slug}`}>
              <div>
                <Image src={cover.attributes.url} alt="cover" />

                {game.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>

              <div>
                <span>{game.attributes.title}</span>
                <span className={styles.price}>
                  {fn.calcDiscountPrice(
                    game.attributes.price,
                    game.attributes.discount
                  )}
                  €
                </span>
              </div>
            </Link>

            <WishlistIcon
              gameId={game.id}
              className={styles.whislistIcon}
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GridGames;
