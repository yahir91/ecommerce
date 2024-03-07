import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import styles from "./BannerLastGamePublished.module.scss";
import { Game } from "../../../api/game";

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
  // const price = fn.calcDiscountedPrice(
  //   game.attributes.price,
  //   game.attributes.discount
  // );

  return (
    <div className={styles.container}>
      <Image
        src={wallpaper.data.attributes.url}
        className={styles.wallpaper}
        alt="wallpaper"
      />

      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {/* {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()} */}
          </span>

          <h2>{game.attributes.title}</h2>

          <p className={styles.price}>
            {/* <Label.Discount>-{game.attributes.discount}%</Label.Discount>
            <span className={styles.finalPrice}>{price}€</span> */}
          </p>
        </Container>
      </Link>
    </div>
  );
};

export default BannerLastGamePublished;
