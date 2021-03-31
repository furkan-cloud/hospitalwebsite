import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id, state, location } = useParams();
  console.log("state", state);
  console.log("loc", location);
  return (
    <div>
      Detail Page
      {console.log(id)}
    </div>
  );
};

export default Detail;
