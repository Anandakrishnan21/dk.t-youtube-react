import React, { useState, useEffect} from "react";
import VideoCard from "../home/VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import Loading from "../common/Loading";

function SideVideo({ selectedCategory }) {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <>
      {videos ? (
        videos.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-60 flex flex-col justify-center items-center p-2 gap-4 md:gap-2"
          >
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

export default SideVideo;
