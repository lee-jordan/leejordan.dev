import styles from "./css/intro.module.css";
import React from 'react'


export default function Intro( homepage ) {
    // console.log(JSON.stringify(data));
  return (
    <div className={styles.intro_container}>
    <div className={styles.intro_inner}>
        <h1 className={styles.intro_title}>{homepage.title}</h1>
        <h2 className={styles.intro_subtitle}>{homepage.subtitle}</h2>
    </div>
    </div>
  );
}