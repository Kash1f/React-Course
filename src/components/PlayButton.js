
import { useState } from 'react';
import './PlayButton.css'


const PlayButton = ({ children, onPlay, onPause}) => {
  const [playing,setPlaying] =  useState(false); 

    function handleClick(e){
      e.stopPropagation()

      // if playing is true. If playing is true, it calls the onPause function; otherwise, it calls the onPlay function. These functions are passed as props to the PlayButton component
    
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing)  //true hai to false, false hai to true. play pause play pause 
    }

  return (
   <button onClick={handleClick}> {children} {playing ?'⏸️' : '▶️'}</button>
  )
}

export default PlayButton