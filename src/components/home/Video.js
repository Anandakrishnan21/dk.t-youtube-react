import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import Loading from "../common/Loading";
import { useQuery } from "@tanstack/react-query";

function Video({ selectedCategory }) {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: async () => {
      const res = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      return res.items;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {videos &&
        videos.map((item, idx) => (
          <div key={idx} className="w-full md:w-[48%] lg:w-[32%] h-60 md:h-80">
            {item.id.videoId && (
              <Link to={`/video/${item.id.videoId}`} className="linkStyle">
                <VideoCard video={item} />
              </Link>
            )}
          </div>
        ))}
    </>
  );
}

export default Video;
