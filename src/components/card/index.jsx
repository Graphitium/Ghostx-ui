import React, { useEffect, useState } from 'react';

import { ECHO, HISTORY_SIZE, POSITION_MAP, SIZE_X, SIZE_Y } from './constants';
import { useMatrix } from './hooks';
import { SCard } from './styled';
import recorder from '../../utils/microphoneRecorder';

export default function Card({ position = 'center' }) {
  const [ history, setHistory ] = useState([]);

  useEffect(() => {
    recorder.start((value) => {
      setHistory((prev) => {
        prev.unshift(value);

        return prev.slice(0, HISTORY_SIZE);
      });
    }).catch(console.error);

    return () => {
      recorder.stop();
    };
  }, []);

  const matrix = useMatrix({ x: SIZE_X, y: SIZE_Y }, POSITION_MAP[position]);

  return <SCard>
    {matrix.map((key, idx) => {
      const index = key;

      const h = [ ...history ].slice(Math.max(index - ECHO, 0), index + ECHO);

      const value = (h.reduce((acc, v) => acc + v, 0) / h.length || 0);

      const opacity = Math.min(1, value / ((key || 1) * 5));

      return <div key={idx} style={{ background: '#FF00BF', opacity }} />;
    })}
  </SCard>;
}