import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import slider1 from "../public/we.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/slider.module.css";

const Slider = () => {
  const style = { color: "#000", fontSize: "1.5em", margin: "0px 100px" };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className={styles.sliders}>
      <div className={styles.texxt}>
        <h1>Why Choose Abay Dental?</h1>
      </div>
      <div className={styles.boxx}>
        <Carousel responsive={responsive} swipeable={false}>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Experience</h1>
              <p>
                You will have the advantage of a team of highly skilled and
                knowledgeable professionals
              </p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Complete Care</h1>
              <p>We provide a full suite of dental care</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Affordable treatment</h1>
              <p>
                We strive at all times to ensure that our treatment fees are
                fair & affordable.
              </p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Advanced Equipment</h1>
              <p>Equipped with Modern and advanced quipment</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Treatment</h1>
              <p>We see Our patients as family.</p>
            </div>
            <Image src={slider1} alt="" />
          </div>
          <div className={styles.boxxx}>
            <div className={styles.ttxt}>
              <AiOutlineHeart style={style} />
              <h1>Experience</h1>
              <p>
                You’ll have the advantage of a team of highly skilled and
                knowledgeable professionals
              </p>
            </div>
            <Image src={slider1} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
