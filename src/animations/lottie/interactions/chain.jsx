'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const Chain = () => {
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
              state: 'loop',
              transition: 'click',
              frames: 'bird'
            },
            {
              state: 'autoplay',
              transition: 'onComplete',
              frames: 'explosion'
            },
            {
              state: 'autoplay',
              transition: 'onComplete',
              frames: 'feathers',
              reset: true
            }
          ]
        });
      });
    }
  }, [loaded]);

  return (
    <div>
      <h2>Click to see chain animation</h2>
      <br/>
      <pre>
         <code>
           {`
            mode: 'chain',
            actions: [
               {
                 state: 'loop',
                 transition: 'click',
                 frames: 'bird'
               },
               {
                 state: 'autoplay',
                 transition: 'onComplete',
                 frames: 'explosion'
               },
               {
                 state: 'autoplay',
                 transition: 'onComplete',
                 frames: 'feathers',
                 reset: true
               }
             ]
           `}
        </code>
      </pre>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/bird.json"
          mode="normal"
          style={{width: '320px'}}
        />
      )}
    </div>
  );
};

export default Chain;
