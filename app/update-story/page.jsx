"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const UpdateStory = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const storyId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    story: "",
    tag: "",
  });

  useEffect(() => {
    const getStory = async () => {
      const response = await fetch(`/api/story/${storyId}`);
      const data = await response.json();

      setPost({
        story: data.story,
        tag: data.tag,
      });
    };

    if (storyId) getStory();
  }, [storyId]);

  const updateStory = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!storyId) return alert("이야기 ID를 찾을 수 없습니다.");

    try {
      const response = await fetch(`/api/story/${storyId}`, {
        method: "PATCH",
        body: JSON.stringify({
          story: post.story,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateStory}
    />
  );
};

export default UpdateStory;
