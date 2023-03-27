import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import recorder from './utils/microphoneRecorder'

import './assets/styles/reset.scss';

const SIZE = 21;
const ECHO = 5;
const HISTORY_SIZE = Math.round(Math.sqrt(2) * SIZE)

const Card = styled.div`
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(${SIZE}, 1fr);
  grid-template-rows: repeat(${SIZE}, 1fr);
`

console.log(HISTORY_SIZE)

let array = []

const center = {
  x: 10,
  y: 10
}

for (let r = 0; r < SIZE; r++) {
  array[r] = []

  for (let c = 0; c < SIZE; c++) {
    array[r][c] = Math.sqrt(Math.pow(r - center.y, 2) + Math.pow(c - center.x, 2))
  }
}

console.log(array)

array = array.flat()

const App = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    recorder.start((value) => {
      setHistory((prev) => {
        prev.unshift(value)

        return prev.slice(0, HISTORY_SIZE)
      })
    }).catch(console.error)

    return () => {
      recorder.stop()
    }
  }, [])

  return (
    <Card>
      {array.map((key, idx) => {
        const index = key;

        const h = [...history].slice(Math.max(index - ECHO, 0), index + ECHO)

        const value = (h.reduce((acc, v) => acc + v, 0) / h.length || 0)

        const opacity = Math.min(1, value / ((key || 1) * 5))

        return <div key={idx} style={{ background: '#FF00BF', opacity }}/>
      })}
    </Card>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));