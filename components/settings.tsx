import React, { useState } from "react";
import Switch from 'react-input-switch';
import styles from "../styles/settings.module.scss";

export default function Settings() {
    const[exampleSetting, setExampleSetting] = useState(true);

    return (
        <div className={styles.settings}>
            <h1>Settings</h1>
            <hr />

            <ul>
                <li><p>Example setting 1</p><Switch className={styles.switch} value={exampleSetting} onChange={setExampleSetting}></Switch></li>
            </ul>
        </div>
    )
}