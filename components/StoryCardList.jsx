import React from "react";
import StoryCard from "./StoryCard";

const StoryCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 story_layout">
      {data.map((post) => (
        <StoryCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default StoryCardList;
