"use client";

import { useEffect, useState } from "react";
import StoryCardList from "./StoryCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/story");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filterStoris = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.story) ||
        regex.test(item.tag)
    );
  };

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <StoryCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
