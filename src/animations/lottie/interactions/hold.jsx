'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const Hold = () => {
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
          player: e.target,
          mode: 'cursor',
          actions: [
            {
              type: "hold"
            }
          ]
        });
      });
    }
  }, [loaded]);

  return (
    <div>
      <h2>Play animation on hold</h2>
      <br/>
      {!loaded ? null : (
        <lottie-player
          ref={ref}
          src="/lottie/plant.json"
          mode="normal"
          style={{ width: '320px' }}
        />
      )}
    </div>
  );
};

export default Hold;
