import { Separator } from "../../Shared/Separator/Separator";
import Gallery from "./Gallery/Gallery";
import Video from "./Video/Video";
import styles from "./Media.module.scss"

const Media = (props: any) => {
  const { video, screenshots } = props;

  return (
    <div className={styles.container}>
      <h2>Visuales</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </div>
  );
};

export default Media;
