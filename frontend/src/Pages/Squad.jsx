import React from "react";
import SquadViewComponent from "../Components/SquadViewComponent";
import { useParams } from "react-router-dom";

function Squad() {
  const { squadid } = useParams(); // this is the username
  const userid = sessionStorage.getItem("userid");
  return (
    <>
      <div>this is the squadid: {squadid}</div>
      <div>this is the userid: {userid}</div>
      <SquadViewComponent />
    </>
  );
}

export default Squad;
