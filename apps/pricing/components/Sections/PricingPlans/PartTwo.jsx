import { pricingData, icons } from "@/data/pricingData";
import styles from "./PartTwo.module.css";

const PartTwo = () => {
  return (
    <div className={styles.container}>
      {pricingData?.map((plan, index) => (
        <div key={index} className={styles.card}>
          {/* Icon */}
          <div className={styles.iconContainer}>{plan.icon}</div>

          {/* Title */}
          <h3 className={styles.title}>{plan.title}</h3>

          {/* Price */}
          <p className={styles.price}>{plan.price}</p>

          {/* Description */}
          <p className={styles.description}>{plan.description}</p>

          {/* Features List */}
          <ul className={styles.featureList}>
            {plan.features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.featureIcon}>{icons.tic}</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className={styles.button}>Get started</button>
        </div>
      ))}
    </div>
  );
};

export default PartTwo;
