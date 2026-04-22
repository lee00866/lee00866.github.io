import styles from "./Footer.module.css";
import { ReactComponent as GitHubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="/" target="_blank">
          <GitHubIcon className={styles.icon} />
        </a>

        <a href="/" target="_blank">
          <LinkedInIcon className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}
