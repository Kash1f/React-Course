import React from "react";

function AddVideo() {
  return (
    <>
      <form>
        <input type="text" />
        <input type="text" />
        <button
          onClick={() => {
            setVideos([...videos,{
                id: videos.length + 1,
                title: "Demo JS Tutorial",
                views: "100K",
                time: "1 month ago",
                channel: "Code with Me",
                verified: true,
              },
            ]);
          }}>
          Add Video
        </button>
      </form>
    </>
  );
}

export default AddVideo;
