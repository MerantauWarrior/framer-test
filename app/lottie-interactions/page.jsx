import React from "react";
import styles from "@/styles/page.module.css";
import Scroll from "@/lottie/interactions/scroll";
import ScrollHorizontal from "@/lottie/interactions/scrollHorizontalOnly";
import Hold from "@/lottie/interactions/hold";
import HoldPause from "@/lottie/interactions/holdPause";
import Click from "@/lottie/interactions/click";
import Chain from "@/lottie/interactions/chain";
import ChainCount from "@/lottie/interactions/chainCount";
import ChainRepeat from "@/lottie/interactions/chainRepeat";
import ChainDynamic from "@/lottie/interactions/chainDynamic";

export const metadata = {
  title: 'Next App Lottie interactions',
  description: 'Generated by create next app',
}

export default function LottieInteraction() {
  return (
    <div className={styles.main}>
      <Scroll/>
      <ScrollHorizontal/>
      <Hold/>
      <HoldPause/>
      <Click/>
      <Chain/>
      <ChainCount/>
      <ChainRepeat/>
      <ChainDynamic/>
    </div>
  )
}
