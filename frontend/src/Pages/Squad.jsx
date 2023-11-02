import React, { useState, useEffect } from "react";
import SquadViewComponent from "../Components/SquadViewComponent";
import { useParams } from "react-router-dom";

function Squad() {
  return (
    <>
      <SquadViewComponent />
    </>
  );
}

export default Squad;
