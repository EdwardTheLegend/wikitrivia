import React from "react";
import styles from "../styles/home-button.module.scss";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="/">
      <button className={styles.homeButton}>home</button>
    </Link>
  );
}
