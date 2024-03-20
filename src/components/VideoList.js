import React from 'react'
import Video from './Video'
import PlayButton from './PlayButton'

const VideoList = ({videos}) => {
  return (
    <>

    
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
      </>
  )
}


export default VideoList