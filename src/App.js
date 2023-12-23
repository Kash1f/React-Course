import Video from "./components/Video"
import './App.css'
import videos from './data/data'
import PlayButton from "./components/PlayButton"
function App() {

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>

      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >

          <PlayButton onPlay={() => console.log('Play',video.title)}
            onPause={() => console.log('Pause',video.title)}>
            {video.title}</PlayButton>

        </Video>)
      }





      <div style={{ clear: 'both' }}>

        {/* <PlayButton message="play-message" onPlay={() => console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}


        {/* <PlayButton message="pause-message" onSmash={() => alert('Pause')}>Pause</PlayButton> */}

      </div>
    </div>

  )
}

export default App