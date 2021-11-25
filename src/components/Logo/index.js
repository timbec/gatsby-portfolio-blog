import React from 'react'; 
import { Fragment } from "react"
import { Link } from "gatsby"


import Triangle from "../SVG/Triangle"
import Square from "../SVG/Square"


const Logo = () => {
    return (
        <Fragment>
            <span className="site-header__logos--title">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    height="300" width="300"
                    class="triangle">
                    <title>Triangle</title>
                        <polygon points="300,60 100,300 300,300" 
                        style={{fill: '#c6372c', stroke:'#c6372c', fillOpacity:1,strokeOpacity:0.9 }} />
                        Sorry, your browser does not support inline SVG. 
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="200" height="200"
                    class="black-square">
                    <title>Square</title>
                    <rect x="50" y="20" width="150" height="150"
                    style={{fill:'#09012d', stroke:'#09012d', fillOpacity:1, strokeOpacity:0.9 }} />
                    Sorry, your browser does not support inline SVG. 
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="200" height="200"
                    class="red-square">
                    <title>Square</title>
                    <rect x="50" y="20" width="150" height="150"
                    style={{fill:'#c6372c', stroke:'#c6372c', fillOpacity:1, strokeOpacity:0.9 }} />
                    Sorry, your browser does not support inline SVG. 
                </svg>
            </span>
        </Fragment>
    )
} 

export default Logo; 