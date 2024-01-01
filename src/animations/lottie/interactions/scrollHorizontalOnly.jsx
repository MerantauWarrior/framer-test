'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const ScrollHorizontal = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  },[]);

  useEffect(() => {
    setLoaded(true)
    if (loaded){
      ref.current.addEventListener('load', function (e) {
        create({
          mode: 'cursor',
          player: e.target,
          actions: [
            {
              position: { x: [0, 1], y: [-1, 2] },
              type: 'seek',
              frames: [0, 180],
            }
          ]
        });
      });
    }
  }, [loaded]);

  return (
    <div>
      <div style={{ height: '450px' }}/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          controls
          src="/lottie/pig.json"
          mode="normal"
          style={{ width: '320px' }}
        />
      )}
    </div>
  );
};

export default ScrollHorizontal;
