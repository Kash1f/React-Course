import './PlayButton.css'

const PlayButton = ({message,children, onPlay}) => {
  let playing = false;
    function handleClick(){
        if(playing) onpause();
        onPlay();
    }

  return (
   <button onClick={handleClick}>{children}</button>
  )
}

export default PlayButton