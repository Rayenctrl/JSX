import React from 'react';
import './App.css';
import './style.css';
import myJsx from "./jsx.png"
import video from "./all over.mp4"

function App() {
  return (
    <React.Fragment>
      <div style={{border:'solid 1px black,maxWidth:100vw'}}>
      <h1 className='title red'>Lazghab Rayen</h1>
      <br/>
      <img src={myJsx} alt='imgjsx'/>
      <br/>
      <img src="/image/react.jpeg" alt="reactpic"/>
      </div>
      <video src={video} width="320" height="200" controls="controls" autoplay="true"/>
    </React.Fragment>
  );
}

export default App;
