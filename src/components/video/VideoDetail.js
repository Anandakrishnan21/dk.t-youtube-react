import React from "react";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import { useParams } from "react-router-dom";
import SideVideo from "./SideVideo";
import { AvatarDemo } from "../common/AvatarDemo";
import { SidebarProvider } from "../../context/SidebarContext";
import Loading from "../common/Loading";
import Header from "../common/Header";
import { useQuery } from "@tanstack/react-query";

function VideoDetail() {
  const { id } = useParams();
  const {
    data: videoDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videoDetails", id],
    queryFn: async () => {
      const res = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
      return res.items[0];
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;

  if (error) return <div>{error.message}</div>;

  if (!videoDetails) {
    return null;
  }
  return (
    <SidebarProvider>
      <Header />
      <div className="videoDiv">
        <div className="videoPlayer">
          <ReactPlayer
            url={`https://youtube.com/watch?v=${id}`}
            alt="youtube"
            className="object-contain rounded"
            width="80%"
            height="90%"
            controls
          />
          <div className="md:w-3/4 flex items-center gap-2 text-sm p-2">
            <AvatarDemo />
            <div className="w-full flex flex-col text-sm">
              <p className="font-semibold">
                {videoDetails.snippet.title.slice(0, 50)}
              </p>
              <p className="text-neutral-600">
                {videoDetails.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-1/4 h-full flex flex-col justify-center items-center">
          <SideVideo selectedCategory={videoDetails.snippet.categoryId} />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default VideoDetail;
