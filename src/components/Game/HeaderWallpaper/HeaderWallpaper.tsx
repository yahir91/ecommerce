import { Image } from "semantic-ui-react";
import styles from "./HeaderWallpaper.module.scss";
const HeaderWallpaper = (props: any) => {
  const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
      <Image src={image} alt="wallpaper" />
    </div>
  );
};

export default HeaderWallpaper;
