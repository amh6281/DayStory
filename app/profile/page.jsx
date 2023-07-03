"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]); // useSession은 비동기. 따라서, session값을 받아온 후에 호출되어야 하기 때문에 의존성배열에 session.user.id

  const handleEdit = (post) => {
    router.push(`/update-story?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("이 이야기를 정말 삭제하시겠습니까?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/story/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Profile
      name="My"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
