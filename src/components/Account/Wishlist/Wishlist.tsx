import { useState, useEffect } from "react";
import { size } from "lodash";
import { Wishlist as WishlistCtrl } from "../../../app/api/wishList";
import { useAuth } from "../../../hooks/useAuth";
import NoResult from "../../Shared/NoResult/NoResult";
import GridGames from "./GridGames/GridGames";

const wishlistCtrl = new WishlistCtrl();

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.getAll(user.id);
        setWishlist(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload, user.id]);

  return size(wishlist) === 0 ? (
    <NoResult text="You don't have any game in your WishList" />
  ) : (
    <GridGames wishlist={wishlist} onReload={onReload} />
  );
};

export default Wishlist;
