import Video from "./components/Video"
import './App.css'
import videoDB from './data/data'
import PlayButton from "./components/PlayButton"
import { useState } from "react"
import AddVideo from "./components/AddVideo"


function App() {

  const [videos, setVideos] = useState(videoDB)

  return (

    <>
    <div className="App" onClick={()=>console.log('App')}>
     
     <AddVideo/>

      {videos.map((video) => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >

          <PlayButton onPlay={() => console.log('Playing',video.title)}
            onPause={() => console.log('Paused',video.title)}>
            {video.title}</PlayButton>

        </Video>)
      }





      <div style={{ clear: 'both' }}>

        {/* <PlayButton message="play-message" onPlay={() => console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}


        {/* <PlayButton message="pause-message" onSmash={() => alert('Pause')}>Pause</PlayButton> */}

      </div>
    </div>

    {/* <Counter></Counter> */}
</>
  )
}

export default App