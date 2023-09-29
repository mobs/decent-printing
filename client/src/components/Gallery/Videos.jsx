import React, { useState, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";

const Videos = () => {
  const videoRef = useRef(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayClick = () => {
    setShowPlayer(true);
  };
  const vimeoVideoUrl ="https://player.vimeo.com/video/869696208?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=false&byline=false&portrait=false";


  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <div className="videoBg flex justify-center items-center overflow-hidden h-[500px] bg-gradient-to-br bg-gradient-stops-[2.11%, 34.14%, 68.81%, 105.05%] from-[#ff869f] via-[#fa988a] via-[#f19a73] to-[#ffd0b1] relative flex items-center justify-center mb-8">
        {/* <video
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
        </video> */}

        {!showPlayer ? (
          <button
            onClick={handlePlayClick}
            className="text-white border-2 border-gray-300 rounded-full p-4"
          >
            <BsPlayFill className="p-2 hover:scale-150 bg-yellow-500 rounded-full transition-all duration-500 md:text-7xl text-6xl" />
          </button>
        ) : (
          <div className="md:w-[80%] w-[100%] h-[100%] relative ">
            <iframe
              src={vimeoVideoUrl}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="Decent2"
            ></iframe>
          </div>
        )}
      

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
