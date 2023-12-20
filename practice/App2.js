import Video from "./Video2"
import './App2.css'
function Appp(){

return(
  
  <> 
  <div className="App">
  <div>Videos</div>

  {/* ye title props obj me obj ki form me jaingy */}

  <Video title="React Js Tutorial" views="10K" time="1 year ago" channel="Code with Me" verified={true}></Video>  
  
  <Video title="Node Js Tutorial" views="20K" time="1 month ago" channel="Code with Me" verified={true}></Video>

  <Video title="MongoDB Tutorial" views="100K" time="3 months ago" channel="Code with Me" verified={false}></Video>

  </div>
  </>
  )
}

export default Appp