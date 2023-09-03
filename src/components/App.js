import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png';

const App = () => {
  const [val,setval]=useState(300);
  return (
    <div id="main">
      <img src={star}  height={`${val}px`} width={`${val}px`}  onClick={()=>{setval(val+2)}}/>
    </div>
  )
}


export default App;
