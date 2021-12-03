import React from "react";

const Triangle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    height="200" width="200"
    class="triangle">
        <title>Triangle</title>
		    <polygon points="150,40 100,200 200,200" 
            style={{fill: '#c6372c', stroke:'#c6372c', fillOpacity:1,strokeOpacity:0.9 }} />
            Sorry, your browser does not support inline SVG. 
	  </svg>
  );
};

export default Triangle;