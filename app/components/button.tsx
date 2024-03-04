import { Link } from "@remix-run/react";
import styles from "~/styles/button.module.css";

export function Button({ children, to }: { children: React.ReactNode, to: string }) {
  return <p className={styles.button}><Link to={to}>{children}</Link></p>;
}