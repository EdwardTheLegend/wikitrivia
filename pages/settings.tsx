import React, { useState } from "react";
import Switch from 'react-input-switch';
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
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <noscript>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                </noscript>

                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ee32d467b63d4a668b929bfb0f965c29"}'></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9QWSN0LZWV"></script>
                <script dangerouslySetInnerHTML={{
                    __html:
                        `window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-9QWSN0LZWV');`}}
                />

            </Head>
            <HomeButton />
            <div className={styles.settings}>
                <h1>Settings</h1>
                <hr />
                <ul>
                    <li>
                        <p>Example setting 1</p>
                        <Switch className={styles.switch} value={exampleSetting1} onChange={setExampleSetting1}></Switch>
                    </li>
                    <li>
                        <p>Example setting 2</p>
                        <Switch className={styles.switch} value={exampleSetting2} onChange={setExampleSetting2}></Switch>
                    </li>
                    <li>
                        <p>Example setting 3</p>
                        <Switch className={styles.switch} value={exampleSetting3} onChange={setExampleSetting3}></Switch>
                    </li>
                </ul>
            </div>
        </>
    )
}