import ReactPlayer from "react-player";
import styles from "./Video.module.scss";

const Video = (props: any) => {
  const { video } = props;

  return (
    <ReactPlayer
      url={video}
      className={styles.video}
      width="100%"
      height={634}
    />
  );
};

export default Video;
