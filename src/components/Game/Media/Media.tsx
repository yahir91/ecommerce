import { Container } from "semantic-ui-react";
import { Separator } from "../../Shared/Separator/Separator";
import Video from "./Video/Video";
import Gallery from "./Gallery/Gallery";

const Media = (props: any) => {
  const { video, screenshots } = props;

  console.log(props);

  return (
    <Container>
      <h2>Visuales</h2>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
};

export default Media;
