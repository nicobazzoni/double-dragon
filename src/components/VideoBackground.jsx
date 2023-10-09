import React from 'react';
import videoSrc from '../assets/images/fight.mp4';

const VideoPlayer = () => {
    return (
        <div className="video-container">
            <video controls width="100%" height="auto" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
