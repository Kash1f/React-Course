import './PlayButton.css'

const PlayButton = ({message,children, onClick}) => {

    function handleClick(){
        onClick();
    }


  return (
   <button onClick={handleClick}>{children}</button>
  )
}

export default PlayButton