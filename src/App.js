import Video from "./components/Video"
import './App.css'
function App(){

  let videos = [{
    title: "React Tutorial",
    views: "1M",
    time: "3 months ago",
    channel: "Code with Me",
    verified: true
  },{
    title: "Node JS Tutorial",
    views: "100K",
    time: "1 year ago",
    channel: "Code with Me",
    verified: true
  },
{
    title: "MongoDB Tutorial",
    views: "100K",
    time: "1 month ago",
    channel: "Code with Me",
    verified: false
}] 
  return(
  
  <> 
  <div className="App">
  <div>Videos</div>

    {
      videos.map(video=>
        <Video
         title={video.title} 
         views={video.views} 
         time={video.time} 
         channel={video.channel} 
         verified={false}></Video>)
    }


  </div>
  </>
  )
}

export default App