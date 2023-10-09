import React from 'react';
import videoSrc from '../assets/images/fight_compressed.mp4';

const VideoPlayer = () => {
    return (
        <div className="video-container">
            <video  width="100%" height="auto" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
