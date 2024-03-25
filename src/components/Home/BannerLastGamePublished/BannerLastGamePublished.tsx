import Link from "next/link";
import { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import { Game } from "../../../app/api/game";
import { fn } from "../../../utils/functions";
import { Label } from "../../Shared/Label";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

const BannerLastGamePublished = () => {
  const [game, setGame] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.wallpaper;
  //   const releaseDate = new Date(game.attributes.releaseDate).toISOString();
  const price = fn.calcDiscountPrice(
    game.attributes.price,
    game.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image
        src={wallpaper.data.attributes.url}
        className={styles.wallpaper}
        alt="wallpaper"
      />

      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <span className={styles.date}>
          {/* {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()} */}
        </span>

        <h2>{game.attributes.title}</h2>

        <p className={styles.price}>
          {game.attributes.discount && (
            <Label.Discount>-{game.attributes.discount}%</Label.Discount>
          )}
          <span className={styles.finalPrice}>{price}€</span>
        </p>
      </Link>
    </div>
  );
};

export default BannerLastGamePublished;
