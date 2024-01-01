'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const Click = () => {
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
          mode: "cursor",
          actions: [
            {
              type: "click",
              forceFlag: false
            }
          ]
        });
      });
    }
  }, [loaded]);

  return (
    <div>
      <h2>Play animation on click</h2>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/hand.json"
          mode="normal"
          style={{width: '320px'}}
        />
      )}
    </div>
  );
};

export default Click;
