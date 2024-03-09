import React from "react";
import VideoCard from "../home/VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import Loading from "../common/Loading";
import { useQuery } from "@tanstack/react-query";

function SideVideo({ selectedCategory }) {
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
        ))}
    </>
  );
}

export default SideVideo;
