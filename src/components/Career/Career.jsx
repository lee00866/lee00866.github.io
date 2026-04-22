import styles from "./Career.module.css";

export default function Career() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.h1}>Career</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.h2}>TRiTO Co.</h2>
          <span className={styles.date}>Dec 2017 - Jun 2022</span>
        </div>
        <div className={styles.card}>
          <div className={styles.logo}>
            <img src="./image/trito.jpeg" alt="TRITO" />
          </div>

          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <h3>Software Developer (Assistant Manager)</h3>
            </div>
            <p className={styles.location}>Seoul, Republic of Korea</p>
            <ul className={styles.details}>
              <li>
                Developed a web-based onboarding/training system using{" "}
                <strong className={styles.tag}>
                  Java (JSP/Servlets), Spring Framework, jQuery, and Oracle DB
                </strong>
                , enabling new hires to access structured learning modules and
                track their progress.
              </li>
              <li>
                Maintained and optimized an asset management system
                <strong className={styles.tag}>(Java, SQL)</strong>
                used by over 1,000 daily users, improving stability and data
                accuracy.
              </li>
              <li>
                Optimized large-scale data processing workflows using
                <strong className={styles.tag}>Oracle DB</strong>, handling
                extensive sales records for Samsung Electronics China Division
                with high efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
