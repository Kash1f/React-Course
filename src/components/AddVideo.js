import React, { useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Code with Me",
  verified: true,
  title: '',
  views:''
}


function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
   
  }

  function handlChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handlChange}
          placeholder="title"
          value={video.title}
          
        />
        <input
          type="text"
          name="views"
          onChange={handlChange}
          placeholder="views"
          
        />
        <button
          onClick={handleSubmit}>Add Video</button>
      </form>

      {/* // onClick={() => {
          setVideos([...videos,{
              id: videos.length + 1,
              title: "Demo JS Tutorial",
              views: "100K",
              time: "1 month ago",
              channel: "Code with Me",
              verified: true,
            },
          ]);
          }} */}
      
    </>
  );
}

export default AddVideo;
