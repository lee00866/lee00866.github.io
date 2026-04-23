import styles from "./Footer.module.css";
import { ReactComponent as GitHubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="https://github.com/lee00866" target="_blank" rel="noreferrer">
          <GitHubIcon className={styles.icon} />
        </a>

        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/eunji-lee-86b87a261/"
          target="_blank"
        >
          test code
          <LinkedInIcon className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}
