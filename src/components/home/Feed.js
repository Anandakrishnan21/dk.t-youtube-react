import React from "react";
import Video from "./Video";

function Feed({ selectedCategory }) {
  return (
    <div className="w-full flex flex-row flex-wrap gap-2 p-4">
      <Video selectedCategory={selectedCategory} />
    </div>
  );
}

export default Feed;
