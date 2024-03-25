import { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./WishListIcon.module.scss";
import { Wishlist } from "../../../app/api/wishList";
import { useAuth } from "../../../hooks/useAuth";

const wishlistCtrl = new Wishlist();
const WishlistIcon = (props: any) => {
  const { gameId, className, removeCallback } = props;
  const [hasWishlist, setHasWishlist] = useState<any>(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.check(user.id, gameId);
        setHasWishlist(response);
      } catch (error) {
        setHasWishlist(false);
        console.error(error);
      }
    })();
  }, [gameId, user.id]);

  const addWishlist = async () => {
    const response = await wishlistCtrl.add(user.id, gameId);
    setHasWishlist(response);
  };

  const deleteWishlist = async () => {
    console.log(process.cwd());
    try {
      await wishlistCtrl.delete(hasWishlist.id);
      setHasWishlist(false);

      if (removeCallback) {
        removeCallback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (hasWishlist === null) return null;

  return (
    <Icon
      name={hasWishlist ? "heart" : "heart outline"}
      onClick={hasWishlist ? deleteWishlist : addWishlist}
      className={classNames(styles.wishlistIcon, {
        [className]: className,
      })}
    />
  );
};

export default WishlistIcon;
