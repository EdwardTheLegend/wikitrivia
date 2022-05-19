import React from "react";
import styles from "../styles/home-button.module.scss";
import Link from "next/link";
import Head from "next/head";

export default function HomeButton() {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </noscript>
      </Head>
      <Link href="/">
        <button className={styles.homeButton}>home</button>
      </Link>
    </>
  );
}
