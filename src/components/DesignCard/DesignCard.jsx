import { useEffect, useState } from "react";
import styles from "./DesignCard.module.css";
import { IoIosArrowForward } from "react-icons/io";

export default function DesignCard() {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    fetch("/data/designs.json")
      .then((res) => res.json())
      .then((data) => setDesigns(data))
      .catch(() => setDesigns([]));
  }, []);
  return (
    <>
      {designs.map((design) => (
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={design.thumbnail} alt={design.thumbnailAlt} />
          </div>
          <div className={styles.header}>
            <div className={styles.before}>
              <h4>{design.title}</h4>
              <div className={styles.desc}>{design.sub} </div>
            </div>
            <a href={design.url} target="_blank" rel="noreferrer">
              <div className={styles.after}>
                <h3>Show Project</h3>
                <IoIosArrowForward />
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
