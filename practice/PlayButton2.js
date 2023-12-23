import './PlayButton.css'

const PlayButton = ({message,children, onPlay, onPause}) => {
  let playing = false;  //don't use this approach
    function handleClick(){
        if(playing) onPause();
        else onPlay();

        playing = !playing;  //true hai to false, false hai to true. play pause play pause
    }

  return (
   <button onClick={handleClick}> {children} :{playing ?'>' : '||'}</button>
  )
}

export default PlayButton