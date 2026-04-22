import { useState } from "react";
import styles from "./Header.module.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <a href="/" className={styles.logo}>
            EUNJI's Portfolio
          </a>
        </h1>

        <button
          className={`${styles.menuIcon} ${menu ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          {menu ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>

        <nav className={`${styles.nav} ${menu ? styles.navOpen : ""}`}>
          <ul className={styles.list}>
            <li className={styles.item}>My Work</li>
            <li className={styles.item}>Career</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
