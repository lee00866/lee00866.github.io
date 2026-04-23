import styles from "./MyWork.module.css";
import WorkCard from "../WorkCard/WorkCard";
import { useState } from "react";
import DesignCard from "../DesignCard/DesignCard";

export default function MyWork() {
  const [filter, setFilter] = useState("all");
  return (
    <section id="myWork" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.header}>My Work</h1>
          <div className={styles.line} />
        </div>
        <div className={styles.filter}>
          <div
            className={`${styles.btn} ${filter === "all" && styles.active}`}
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <span className={styles.divider}>/</span>
          <div
            className={`${styles.btn} ${
              filter === "development" && styles.active
            }`}
            onClick={() => setFilter("development")}
          >
            Development
          </div>
          <span className={styles.divider}>/</span>
          <div
            className={`${styles.btn} ${filter === "design" && styles.active}`}
            onClick={() => setFilter("design")}
          >
            Design
          </div>
        </div>
        <div className={styles.cardListContainer}>
          {(filter === "all" || filter === "development") && (
            <div className={styles.cardList}>
              <WorkCard />
            </div>
          )}
        </div>
        <div className={styles.cardListContainer}>
          {(filter === "all" || filter === "design") && (
            <div className={styles.cardList}>
              <DesignCard />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
