import Video from "./components/Video"
import './App.css'
import videoDB from './data/data'
import PlayButton from "./components/PlayButton"
import { useState } from "react"
import AddVideo from "./components/AddVideo"


function App() {

  const [videos, setVideos] = useState(videoDB)

  function addVideos(video){
    setVideos([
      ...videos,   //videos ko exp kiya us se saray objects agaye data wale
      {...video, id: videos.length +1} //and adding new video to it, ye child se aayi hai
    ])

  }

  return (

    <>
    <div className="App" onClick={()=>console.log('App')}>
     
     <AddVideo addVideos={addVideos}/>

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