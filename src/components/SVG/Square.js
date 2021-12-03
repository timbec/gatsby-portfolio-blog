import React from "react";

const Square = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="200" height="200"
    class="square">
      <title>Square</title>
      <rect x="50" y="20" width="150" height="150"
      style={{fill:'#09012d', stroke:'#09012d', fillOpacity:1, strokeOpacity:0.9 }} />
      Sorry, your browser does not support inline SVG. 
    </svg>
  );
};

export default Square;