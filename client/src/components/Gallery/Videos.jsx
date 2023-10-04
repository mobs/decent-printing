import React, { useState, useRef, useEffect } from "react";
import Vimeo from '@vimeo/player'
import { BsPlayFill } from "react-icons/bs";

const Videos = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayClick = () => {
    setShowPlayer(true);
  };
  const vimeoVideoUrl ="https://player.vimeo.com/video/871234396?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=false&byline=false&portrait=false";

  const vimeoIframeRef = useRef(null);

  useEffect(() => {
    let iframe = document.getElementById('vimeo')

    var options = {
      url: vimeoVideoUrl
    }

   if(iframe) { 
      const player = new Vimeo (iframe, options);
      player.on('ended', () => {
        setShowPlayer(false);
    })
   }
  }, [vimeoIframeRef.current]);

  return (
    <div>
      <div className="videoBg flex justify-center items-center overflow-hidden h-[500px] relative flex items-center justify-center mb-8">
      {!showPlayer ? (
          <button
            onClick={handlePlayClick}
            className="text-white border-2 border-gray-300 rounded-full p-4"
          >
            <BsPlayFill className="p-2 hover:scale-150 bg-red-700 rounded-full transition-all duration-500 md:text-7xl text-6xl" />
          </button>
        ) : (
          <div className="md:w-[80%] w-[100%] h-[100%] relative">
            <iframe
              id="vimeo"
              ref={vimeoIframeRef}
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
