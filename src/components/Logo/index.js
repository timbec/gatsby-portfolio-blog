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
                        height="300" width="400"
                        className="triangle">
                        <title>Triangle</title>
                            <polygon points="250,60 100,400 400,400" 
                            style={{fill: '#c6372c', stroke:'#c6372c', fillOpacity:1,strokeOpacity:0.9 }} />
                            Sorry, your browser does not support inline SVG. 
                    </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" 
                    width="150" height="150"
                    class="black-square">
                    <title>Square</title>
                    <rect x="30" y="20" width="120" height="120"
                    style={{fill:'#09012d', stroke:'#09012d', fillOpacity:1, strokeOpacity:0.9 }} />
                    Sorry, your browser does not support inline SVG. 
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="150" height="150"
                    class="red-square">
                    <title>Square</title>
                    <rect x="20" y="20" width="120" height="120"
                    style={{fill:'#c6372c', stroke:'#c6372c', fillOpacity:1, strokeOpacity:0.9 }} />
                    Sorry, your browser does not support inline SVG. 
                </svg> */}
                </span>
                {/* TODO: Rename to reflect BEM. Update styles. */}
                <div className="titleContainer">
                    <h1 className="site-header__title">
                    <Link to="/">Tim Beckett</Link>
                    </h1>

                    <h2 className="site-header__subtitle">Software Developer</h2>
                </div>
        </Fragment>
    )
} 

export default Logo; 