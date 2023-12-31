'use client'

import React, {useRef} from 'react';
import Lottie from "lottie-react";

import stairAnimation from "@/lottie/json/stair.json";

const style = {
  height: 300,
  border: 3,
  borderStyle: "solid",
  borderRadius: 7,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 15],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [0, 31],
    },
  ],
};

const Demo = () => {
  const lottieRef = useRef(null);

  const playHandler = () => {
    lottieRef.current.play();
  }
  const pauseHandler = () => {
    lottieRef.current.pause();
  }
  const stopHandler = () => {
    lottieRef.current.stop();
  }
  const dirMHandler = () => {
    lottieRef.current.setDirection(-1);
  }
  const dirPHandler = () => {
    lottieRef.current.setDirection(1);
  }
  const goHandler = () => {
    lottieRef.current.goToAndStop(10, true);
    console.log(lottieRef.current.getDuration(true))
  }

  return (
    <div>
      demo
      <Lottie
        lottieRef={lottieRef}
        animationData={stairAnimation}
        style={style}
        interactivity={interactivity}
      />
      <button onClick={playHandler}>play</button>
      <button onClick={pauseHandler}>pause</button>
      <button onClick={stopHandler}>stop</button>
      <button onClick={dirMHandler}>dir -</button>
      <button onClick={dirPHandler}>dir +</button>
      <button onClick={goHandler}>frame 10</button>
    </div>
  );
};

export default Demo;
