import { Link } from "@remix-run/react";
import styles from "~/styles/menu.module.css";

export default function Menu() {
  return (
    <header className={styles.menu}>
      <div id="site-name"><Link to="/">池田大輝 / Daiki Ikeda</Link></div>
      <nav>
        <button id="hamburger">menu</button>
        <ul id="navbar-links" className={styles.hidden}>
          <li><Link to="/works">作品集</Link></li>
          <li><Link to="/profile">プロフィール</Link></li>
          <li><Link to="/illustrations">イラスト</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
};