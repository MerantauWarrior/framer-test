'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const ChainCount = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    setLoaded(true)
    if (loaded) {
      setTimeout(() => {
        create({
          player: ref.current,
          mode: 'chain',
          actions: [
            {
              state: 'click',
              forceFlag: false,
              frames: 'star',
              transition: 'click',
              count: 3
            },
            {
              path: '/lottie/confetti.json',
              frames: 'confetti',
              state: 'autoplay',
              reset: true,
              transition: 'onComplete'
            }
          ]
        });
      }, 1000)
    }
  }, [loaded]);

  return (
    <div>
      <h2>Click 3 times to see chain animation</h2>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/star.json"
          mode="normal"
          style={{width: '320px'}}
        />
      )}
    </div>
  );
};

export default ChainCount;
