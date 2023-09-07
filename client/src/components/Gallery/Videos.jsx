import React, { useRef } from "react";

const Videos = ({ data, selectedCategory }) => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 via-purple-300 to-red-500 relative flex items-center justify-center mb-8">
        <video
          ref={videoRef}
          onEnded={handleVideoEnded}
          autoPlay
          muted
          className="h-[500px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.5),0_10px_20px_-2px_rgba(0,0,0,0.5)]"
        >
          <source
            src="https://drive.google.com/uc?export=download&id=1tdm_ryNiqWI78bqp2mVFpDE4Zaa3fWRU"
            type="video/mp4"
          />
        </video>
        <div className="absolute md:top-[5rem] top-[11rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black opacity-40">
          <h1 className="lg:text-7xl md:text-4xl text-sm font-semibold">
            Decent Printing Press LLC - Dubai{" "}
          </h1>
        </div>
      </div>

      <p className="text-center">More Videos Coming Soon...</p>
    </div>
  );
};

export default Videos;
