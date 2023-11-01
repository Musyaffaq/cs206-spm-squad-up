import React, { useState, useEffect } from "react";
import SquadViewComponent from "../Components/SquadViewComponent";
import { useParams } from "react-router-dom";

function Squad() {
  const [data, setData] = useState([]);
  const { squadid } = useParams(); // this is the username
  const userid = sessionStorage.getItem("userid");

  useEffect(() => {
    fetch(`http://localhost:5000/get-squad/${squadid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div>this is the squadid: {squadid}</div>
      <div>this is the userid: {userid}</div>
      <SquadViewComponent />
    </>
  );
}

export default Squad;
