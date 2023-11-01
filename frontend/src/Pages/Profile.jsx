import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { userid } = useParams(); // this is the username
  return <div>Profile userid: {userid}</div>;
}

export default Profile;
