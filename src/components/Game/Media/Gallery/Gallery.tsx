import { map } from "lodash";
import { useState } from "react";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";
import FullModal from "../../../Shared/FullModal/FullModal";
import styles from "./Gallery.module.scss";

const Gallery = (props: any) => {
  const { screenshots } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  const screenshotsClone = [...screenshots];
  const principalImage = screenshotsClone.shift();

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: `${styles.track}`,
    customPaging: function (index: any) {
      return (
        <Image src={screenshots[index].attributes.url} alt="scrrenshots" />
      );
    },
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image
            src={principalImage.attributes.url}
            onClick={onOpenClose}
            alt="mainImage"
          />
        </div>

        <div className={styles.grid}>
          {map(screenshotsClone, (screenshot) => (
            <div key={screenshot.id}>
              <Image
                src={screenshot.attributes.url}
                onClick={onOpenClose}
                alt="screenshot"
              />
            </div>
          ))}
        </div>
      </div>

      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          {screenshots && (
            <Slider {...settings}>
              {map(screenshots, (screenshot) => (
                <div key={screenshot.id} className={styles.screenshot}>
                  <Image src={screenshot.attributes.url} alt="screenshot" />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </FullModal>
    </>
  );
};

export default Gallery;
