import React from 'react';
import './App.css';
import Counter from "./Counter";
import s from './Counter.module.css'

function App() {
  return (
    <div className={s.main}>
      <Counter/>
    </div>
  );
}

export default App;
