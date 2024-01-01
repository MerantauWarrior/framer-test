'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const ChainDynamic = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    setLoaded(true)
    if (loaded) {
      ref.current.addEventListener('load', function (e) {
        create({
          player: e.target,
          mode: 'chain',
          actions: [
            {
              state: 'click',
              transition: 'onComplete'
            },
            {
              state: 'autoplay',
              transition: 'onComplete',
              path: 'lottie/confettiNew.json'
            },
            {
              state: 'autoplay',
              transition: 'onComplete',
              path: 'lottie/done.json',
              reset: true
            }
          ]
        });
      });
    }
  }, [loaded]);

  return (
    <div>
      <h2>Chaining - Dynamically Load Animations</h2>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/aim.json"
          mode="normal"
          style={{width: '320px'}}
        />
      )}
    </div>
  );
};

export default ChainDynamic;
