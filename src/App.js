import {useState} from 'react';
import './App.css';
import Button from './Button.js';
import P from './P.js';

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <P />
      <Button />
    </> 
  );
}

export default App;
