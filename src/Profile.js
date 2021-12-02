import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  heeyoung: {
    name: "윤희영",
    description: "Frontend Engineer",
  },
  gooroomii: {
    name: "구름이",
    description: "비숑프리제 강아지",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
