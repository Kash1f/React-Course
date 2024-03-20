import './App.css'
import videoDB from './data/data'
import { useState } from "react"
import AddVideo from "./components/AddVideo"
import VideoList from "./components/VideoList"


function App() {

  const [videos, setVideos] = useState(videoDB)

  function addVideos(video){
    setVideos([
      ...videos,   //videos ko exp kiya us se saray objects agaye data wale
      {...video, id: videos.length +1} //and adding new video to it, ye child se aayi hai
    ])
  }

  function deleteVideo(id){
  
  }

  return (

    <>
    <div className="App" onClick={()=>console.log('App')}>
    
     <AddVideo addVideos={addVideos}/>
     <VideoList delete={deleteVideo}videos={videos} />

    </div>

    {/* <Counter></Counter> */}
</>
  )
}

export default App