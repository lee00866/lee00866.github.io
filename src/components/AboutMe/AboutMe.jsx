import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.typing}>
            <h1 className={styles.title}>About Me</h1>
          </div>
          <div className={styles.description}>
            Hi! My name is Eunji Lee.
            <br />
            I am a Backend Developer with over 4 years of experience in Korea
            and a graduate of the Mobile Application Design and Development
            program at Algonquin College. <br />
            I have built a diverse range of projects across web and mobile
            platforms.
            <br /> Currently, I am dedicated to growing into a developer whom
            everyone enjoys working with, combining technical excellence with a
            collaborative mindset.
            <br />
          </div>
        </div>
        <div>
          <img src="/image/avatar.png" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
