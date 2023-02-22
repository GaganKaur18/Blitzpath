import styles from "./AboutUs.module.css";
import AboutUsCrousel from "./AboutUsCrousel";
const AboutUs = () => {
  return (
    <div>
      <div className={styles.craouselContainer}>
        <h1>Learn About Us</h1>
        <AboutUsCrousel />
      </div>
    </div>
  );
};

export default AboutUs;
