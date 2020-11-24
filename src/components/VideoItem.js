import React from 'react';
import '../style/video.css';

const VideoItem = ({video}) => {
    return (
        <div className='my-4 col-md-3 video-item'>
            <a className="h-100 shadow-sm d-block video-item-inner" target="_blank" href={"https://www.youtube.com/watch?v=" +  video.id.videoId}>
                <img className='img-fluid d-block m-auto' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='py-2 px-3 text-center'>{video.snippet.title}</div>
            </a>
        </div>
    )
};
export default VideoItem;