import { useState } from "react";
import styles from "./rating-card.module.css";

export default function RatingCard() {
  const [rating, setRating] = useState<number>();
  const [isSubmited, setSubmited] = useState<boolean>(false);

  function handSetRating(rating: number) {
    setRating(rating);
  }

  function handSetSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmited(true);
  }
  if (isSubmited) {
    return (
      <div className={styles.card} style={{ alignItems: "center" }}>
        <div>
          <img src="./illustration-thank-you.svg" alt="Cellphone" />
        </div>
        <div className={styles.pill}>
          <p>You selected {rating} out of 5</p>
        </div>
        <div className={styles.textCenter}>
          <h1 className={styles.title}>Thank you!</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            natus fuga eius pariatur modi sit impedit animi non obcaecati
            consectetur?
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.star} src="/icon-star.svg" alt="Star" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          repudiandae debitis sunt dolore officiis fuga ut adipisci possimus
          saepe sint.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        {[1, 2, 3, 4, 5].map((rating, key) => (
          <button
            key={key}
            onClick={() => handSetRating(rating)}
            className={styles.ratingButton}
          >
            {rating}
          </button>
        ))}
      </div>
      <button onClick={handSetSubmit} className={styles.submit}>
        submit
      </button>
    </div>
  );
}
