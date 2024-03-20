import React, { useState } from "react";
import './AddVideo.css'


function AddVideo({addVideos}) {

  const [video, setVideo] = useState({
        time: "1 month ago",
        channel: "Code with Me",
        verified: true,
  })

  function handleSubmit(e){
    e.preventDefault();
    addVideos(video)
    console.log(video);

  }

  function handlChange(e){
    
    setVideo({...video,
      [e.target.name] : e.target.value
    })}



  return (
    <>
      <form>
        <input type="text" name="title" onChange={handlChange} placeholder="title" />
        <input type="text" name="views" onChange={handlChange} placeholder="views"/>
        <button onClick={handleSubmit}
          // onClick={() => {
            // setVideos([...videos,{
            //     id: videos.length + 1,
            //     title: "Demo JS Tutorial",
            //     views: "100K",
            //     time: "1 month ago",
            //     channel: "Code with Me",
            //     verified: true,
            //   },
            // ]);
          // }}
          >
          Add Video
        </button>
      </form>
    </>
  );
}

export default AddVideo;
