import axios from 'axios';
import React, { useEffect, useState } from 'react'

function VideoLinks({videoHeader}) {

    const [videos, setVideos] = useState([]);
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const channelId = process.env.REACT_APP_BASERA_CHANNEL_ID;

    const fetchVideos = async () => {
        // get most recent youtube videos
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${videoHeader.results}`);
        setVideos(res.data.items.map((item) => (
            {
                title: item.snippet.title,
                id: item.id.videoId
            }
        )))
    }

    useEffect(() => {
        if (videoHeader.results)
            fetchVideos();
        // eslint-disable-next-line
    }, [videoHeader]);

  return (
    <section id="videos" className="introduction scrollto">
        <div className="row clearfix responsive-flex">
            
            <div className="col-3">
                <div className="section-heading">
                    <h3>{videoHeader.title}</h3>
                    <h2 className="section-title">{videoHeader.header}</h2>
                    <p className="section-subtitle">
                        {videoHeader.description}
                    </p>
                </div>

            </div>

            <div className="col-2-3 video-container">
            {
                videos.map((video, index) => (
                    <div key={index} className="video">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={video.title}
                        />{" "}
                    </div>
                ))
            }            
            </div>

        </div>
        <div className='youtube-link'>
            <a href="https://www.youtube.com/channel/UCbZZQ-jGAGSDVQTPJnbEGfQ">
                <p>
                    {videoHeader.moreVideos}
                </p>
            </a>
        </div>
    </section>
  )
}

export default VideoLinks