"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

const CreateStory = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    story: "",
    tag: "",
  });

  const createStory = async () => {};

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createStory}
    />
  );
};

export default CreateStory;
