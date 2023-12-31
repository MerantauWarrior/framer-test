import React from "react";
import styles from "@/styles/page.module.css";
import MyForm from "@/forms/my-form";

export const metadata = {
  title: 'Create Next App Form',
  description: 'Generated by create next app',
}

export default function Form() {
  return (
    <main className={styles.main}>
      <MyForm/>
    </main>
  )
}
