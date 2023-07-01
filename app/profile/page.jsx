"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const handleEdit = async () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name="My"
      desc="Welcome"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
