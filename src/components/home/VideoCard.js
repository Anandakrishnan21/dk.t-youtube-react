import React from "react";
import { AvatarDemo } from "../common/AvatarDemo";

function VideoCard({ video }) {
  const { snippet } = video;
  return (
    <>
      <div className="w-full h-3/4 flex justify-center items-center">
        <img
          src={snippet.thumbnails.high.url}
          alt={snippet.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full h-1/4 flex items-center gap-2 p-1">
        <AvatarDemo />
        <div className="w-full flex flex-col text-sm">
          <p className="font-semibold">{snippet.title.slice(0, 50)}</p>
          <p className="text-neutral-600">{snippet.channelTitle}</p>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
