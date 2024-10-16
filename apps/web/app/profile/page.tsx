import { getProfile } from "@/lib/actions";

import React from "react";

const ProfilePage = async () => {
  const res = await getProfile();
  return (
    <div>
      ProfilePage
      <p>{JSON.stringify(res)}</p>
    </div>
  );
};

export default ProfilePage;
