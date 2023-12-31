import React from "react";
import styles from "@/styles/page.module.css";
import Demo from "@/lottie/demo";
import Auf from "@/lottie/auf";

export const metadata = {
  title: 'Create Next App Lottie',
  description: 'Generated by create next app',
}

export default function Form() {
  return (
    <main className={styles.main}>
      <Demo/>
      <Auf/>
    </main>
  )
}