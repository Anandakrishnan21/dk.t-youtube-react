import React from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import VideoCard from "./VideoCard";
import Header from "../common/Header";
import Loading from "../common/Loading";
import { SidebarProvider } from "../../context/SidebarContext";
import { useQuery } from "@tanstack/react-query";

function SearchFeed() {
  const { searchTerm } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos", searchTerm],
    queryFn: async () => {
      const res = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}&type=video`
      );
      return res.items;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <SidebarProvider>
      <Header />
      <div className="w-full flex flex-row flex-wrap justify-center gap-2 p-4">
        {videos.length > 0 &&
          videos.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[48%] lg:w-[23%] h-60 md:h-80"
            >
              {item.id.videoId && (
                <Link to={`/video/${item.id.videoId}`} className="linkStyle">
                  <VideoCard video={item} />
                </Link>
              )}
            </div>
          ))}
      </div>
    </SidebarProvider>
  );
}

export default SearchFeed;
