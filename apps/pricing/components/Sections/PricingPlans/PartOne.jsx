import React, { useState } from "react";
import styles from "./PartOne.module.css";

const PartOne = () => {
  const [activeButton, setActiveButton] = useState("monthly");

  return (
    <>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <p className={styles.pricingTag}>Pricing plans</p>
        <h2 className={styles.heading}>
          Let’s Get Started. <br />
          We’ve got a Plan that’s perfect for you.
        </h2>
        <p className={styles.description}>
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${
            activeButton === "monthly" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveButton("monthly")}
        >
          Monthly
        </button>

        <button
          className={`${styles.toggleButton} ${
            activeButton === "yearly" ? styles.active : styles.inactive
          }`}
          onClick={() => setActiveButton("yearly")}
        >
          Yearly
        </button>
      </div>
    </>
  );
};

export default PartOne;
