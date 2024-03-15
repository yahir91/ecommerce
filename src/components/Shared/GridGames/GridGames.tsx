import { map } from "lodash";
import Link from "next/link";
import { Image } from "semantic-ui-react";
import { fn } from "../../../utils/functions";
import { Label } from "../Label";
import styles from "./GridGame.module.scss";

const GridGames = (props: any) => {
  const { games } = props;

  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/game/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <Image src={game.attributes.cover.data.attributes.url} alt="url" />
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
      ))}
    </div>
  );
};

export default GridGames;
