import Image from "next/image";
import styles from "./styles.module.css";
import ctaLogoOne from "./imges/cta-logo-one.svg";
import ctaLogoTwo from "./imges/cta-logo-two.png";

function HomePage() {
  return (
    <div className={styles.loginSection}>
      <div className={styles.content}>
        <Image
          src={ctaLogoOne}
          alt="ctaLogoOne"
          className={styles.ctaLogoOne}
        />
        <div className={styles.loginButton}>GET ALL THERE</div>
        <div className={styles.description}>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1
        </div>
        <Image
          src={ctaLogoTwo}
          alt="ctaLogoTwo"
          width={100}
          className={styles.ctaLogoTwo}
        />
      </div>
    </div>
  );
}

export default HomePage;
