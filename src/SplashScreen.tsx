// SplashScreen.js
import React, { useEffect, useRef } from 'react';

const SplashScreen = ({ onEnd }) => {
  const videoRef = useRef(null);

  // Play the video automatically when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="splash-screen">
      <video
        ref={videoRef}
        src="/intro.mp4" // Ensure this is the path to your video in the public folder
        onEnded={onEnd} // Callback when the video ends
        width="100%"
        height="auto"
        controls={false}
      />
      <button onClick={() => videoRef.current.play()} className="replay-button">
        Replay Video
      </button>
    </div>
  );
};

export default SplashScreen;
