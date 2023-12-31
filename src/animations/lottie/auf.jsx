'use client'

import React from 'react';
import { useLottie, useLottieInteractivity } from "lottie-react";

import aufAnimation from "@/lottie/json/Auf_360.json";

const style = {
  width: "800px",
  height: 300,
  border: 3,
  borderStyle: "solid",
  borderRadius: 7,
};

const options = {
  animationData: aufAnimation,
};

const Auf = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "seek",
        frames: [0, 36],
      },
    ],
  });

  return (
    <div>
      {Animation}
    </div>
  );
};

export default Auf;
