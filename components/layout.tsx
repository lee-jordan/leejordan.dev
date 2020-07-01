import Head from "next/head";
import styles from "./css/layout.module.css";

const title = "Portfolio | Lee Jordan";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#252934"
        />
        <meta name="msapplication-TileColor" content="#252934" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="description"
          content="Hello, I'm Lee Jordan. I'm a full stack web developer with a love for DevOps"
        />

        <title>{title}</title>
      </Head>

      <div className="container">{props.children}</div>
    </div>
  );
}
