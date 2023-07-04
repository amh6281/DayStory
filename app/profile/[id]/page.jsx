"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const UserProfile = ({ params }) => {
  // /뒤는 params, ?뒤는 query로 추출, 폴더가 [id]니까 id:params로 출력
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return <Profile name={userName} data={userPosts} />;
};

export default UserProfile;
