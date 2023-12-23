import Video from "./components/Video"
import './App.css'
function App(){

  let obj = {
    title: "MongoDB Tutorial",
    views: "100K",
    time: "3 months ago",
    channel: "Code with Me",
    verified: false
  }

  return(
  
  <> 
  <div className="App">
  <div>Videos</div>



  <Video {...obj}></Video>  
  
  <Video title="Node Js Tutorial" views="20K" time="1 month ago" channel="Code with Me" verified={true}></Video>

  <Video
   title="MongoDB Tutorial" 
   views="100K" 
   time="3 months ago" 
   channel="Code with Me" 
   verified={false}></Video>

  </div>
  </>
  )
}

export default App