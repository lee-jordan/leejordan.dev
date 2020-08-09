import '../styles/global.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faCodepen, faLinkedin);


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}