import React from "react";
import styles from "@/styles/page.module.css";

export const metadata = {
  title: 'Create Next App About',
  description: 'Generated by create next app',
}

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
      </div>
    </main>
  )
}
