import Link from "next/link";
import styles from "./StartTrial.module.css";

const StartTrial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <h2 className={styles.heading}>Start your 30-day free trial</h2>
          <p className={styles.paragraph}>
            Join over 100+ practitioners and organizations already growing with
            Ambel
          </p>
        </div>

        {/* Buttons Section */}
        <div className={styles.buttonsContainer}>
          <Link href="#" className={`${styles.button} ${styles.learnMore}`}>
            Learn more
          </Link>
          <Link href="#" className={`${styles.button} ${styles.getStarted}`}>
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartTrial;
