import React, { useState } from "react";
import Switch from "react-input-switch";
import styles from "../styles/settings.module.scss";
import Head from "next/head";
import HomeButton from "../components/home-button";

export default function Settings() {
  const [exampleSetting1, setExampleSetting1] = useState(true);
  const [exampleSetting2, setExampleSetting2] = useState(true);
  const [exampleSetting3, setExampleSetting3] = useState(true);

  return (
    <>
      <Head>
        <title>Settings</title>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ee32d467b63d4a668b929bfb0f965c29"}'
        ></script>
      </Head>
      <HomeButton />
      <div className={styles.settings}>
        <h1>Settings</h1>
        <hr />
        <ul>
          <li>
            <p>Example setting 1</p>
            <Switch
              className={styles.switch}
              value={exampleSetting1}
              onChange={setExampleSetting1}
            ></Switch>
          </li>
          <li>
            <p>Example setting 2</p>
            <Switch
              className={styles.switch}
              value={exampleSetting2}
              onChange={setExampleSetting2}
            ></Switch>
          </li>
          <li>
            <p>Example setting 3</p>
            <Switch
              className={styles.switch}
              value={exampleSetting3}
              onChange={setExampleSetting3}
            ></Switch>
          </li>
        </ul>
      </div>
    </>
  );
}
