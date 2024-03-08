import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import Loading from "../common/Loading";

function Video({ selectedCategory }) {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [selectedCategory]);

  return (
    <>
      {videos ? (
        videos.map((item, idx) => (
          <div key={idx} className="w-full md:w-[48%] lg:w-[32%] h-60 md:h-80">
            {item.id.videoId && (
              <Link to={`/video/${item.id.videoId}`} className="linkStyle">
                <VideoCard video={item} />
              </Link>
            )}
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Video;
