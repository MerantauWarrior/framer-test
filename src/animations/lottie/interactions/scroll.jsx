'use client'

import React, {useRef, useEffect, useState} from 'react';
import {create} from '@lottiefiles/lottie-interactivity'

const Scroll = () => {
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
          mode: 'scroll',
          player: e.target,
          actions: [
            {
              visibility: [0, 1],
              type: 'seek',
              frames: [0, 151],
            },
          ],
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
        src="/lottie/watch.json"
        mode="normal"
        style={{ width: '320px' }}
        />
      )}
    </div>
  );
};

export default Scroll;
