import styles from "../styles/about.module.css";
import Image from "next/image";
import abimg from "../public/bow.png";
import aboutus from "../public/stuf.jpg";

const aboutPage = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.allcontainer}>
        <div className={styles.abimg}>
          <Image src={abimg} alt="" />
        </div>
        <div className={styles.topcontent}>
          <h1>Who We Are ?</h1>
        </div>
        <div className={styles.bottomcon}>
          <p>
            Abay speciality Dental clinic was founded by Dr. Asfaw Wassie
            Bizuneh. The founder and the Manager of the clinic is a well
            renowned and qualified professional of dental treatment who has
            abundant skill, knowledge and experience on the field. He had a
            vision and a sacred mission on how he wanted to build up his dental
            practice. He set up the practice under his strict guidelines and
            values to provide the best dental services in Hawassa. He slowly and
            steadily developed a team of specialist dentists who shared his
            vision and values.
          </p>
          <div className={styles.uss}>
            <Image src={aboutus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
