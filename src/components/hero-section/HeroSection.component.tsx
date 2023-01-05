import styles from "./HeroSection.module.scss";
import hero from "images/image-hero-desktop.png";
import audiophile from "images/client-audiophile.svg";
import databiz from "images/client-databiz.svg";
import maker from "images/client-maker.svg";
import clientMeet from "images/client-meet.svg";

export default function HeroSection() {
  return (
    // container
    <section className={styles.container} >
      {/* left */}
      <div className={styles.left}>
        <h1 className={styles.title}>Make remote work</h1>
        <p className={styles.text}>
          Get your team in sync, no matter your location. 
          
          Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <a href="google" className={styles['learn-more']}>Learn more</a>
        <div className={styles.clients}>
          <img src={databiz} alt="databiz client" />
          <img src={audiophile} alt="audio phile client" />
          <img src={clientMeet} alt="meet client" />
          <img src={maker} alt="maker client" />
        </div>
      </div>
      {/* right */}
      <div className={styles.right}></div>
    </section>
  );
}
