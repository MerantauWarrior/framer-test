'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const ChainRepeat = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    setLoaded(true)
    if (loaded) {
      ref.current.addEventListener('load', function (e) {

      });
      setTimeout(()=>{
        create({
          player: ref.current,
          mode: 'chain',
          actions: [
            {
              state: 'autoplay',
              transition: 'repeat',
              repeat: 2
            },
            {
              path: '/lottie/particles.json',
              state: 'autoplay',
              frames: [0, 110],
              transition: 'onComplete',
              reset: true,
            }
          ]
        });
      },1000)
    }
  }, [loaded]);

  return (
    <div>
      <h2>Lottie chaining - Repeat</h2>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/bricks.json"
          mode="normal"
          style={{width: '320px'}}
        />
      )}
    </div>
  );
};

export default ChainRepeat;
