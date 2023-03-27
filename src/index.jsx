import React from 'react';

import ReactDOM from 'react-dom';

import './assets/styles/reset.scss';
import Card from './components/card/index.jsx';

const App = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', width: '900px', margin: '100px auto' }}>
    <Card position="topLeft" />
    <Card position="topCenter" />
    <Card position="topRight" />
    <Card position="leftCenter" />
    <Card />
    <Card position="rightCenter" />
    <Card position="bottomLeft" />
    <Card position="bottomCenter" />
    <Card position="bottomRight" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));