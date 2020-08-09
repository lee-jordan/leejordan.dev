import styles from "./css/intro.module.css";
import React from 'react'
import * as homepage from '../public/api/homepage.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  return (
    <div className={styles.intro_container}>
        <div className={styles.intro_inner}>
            <h1 className={styles.intro_title}>{homepage.title}</h1>
            <h2 className={styles.intro_subtitle}>{homepage.subtitle}</h2>
            <div className={styles.social_icons}>

              <a href={homepage.github}>
                <div className={styles.social_button}>
                  <div className={styles.social_icon}>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div className={styles.social_name}>GitHub</div>
                </div>
              </a>
              

              <a href={homepage.codepen}>
                <div className={styles.social_button}>
                  <div className={styles.social_icon}>
                    <FontAwesomeIcon icon={faCodepen} />
                  </div>
                  <div className={styles.social_name}>CodePen</div>
                </div>
              </a>
              
              <a href={homepage.linkedin}>
                <div className={styles.social_button}>
                  <div className={styles.social_icon}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div className={styles.social_name}>LinkedIn</div>
                </div>
              </a>

            </div>
        </div>
    </div>
  );
}