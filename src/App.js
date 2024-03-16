import Video from "./components/Video"
import './App.css'
import videoDB from './data/data'
import PlayButton from "./components/PlayButton"
import { useState } from "react"


function App() {

  const [videos, setVideos] = useState(videoDB)

  return (

    <>
    <div className="App" onClick={()=>console.log('App')}>
      <div>
        <button onClick={()=> {
          setVideos ([...videos,{id:videos.length+1,
            title: "Demo JS Tutorial",
            views: "100K",
            time: "1 month ago",
            channel: "Code with Me",
            verified: true

          }]);
        }}>Add Video</button>
      </div>

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