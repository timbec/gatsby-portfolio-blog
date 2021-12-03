## Things learned trying to set up SVGS in Gatsby.js

Followed directions here: 

https://stackoverflow.com/questions/61158924/import-svg-as-a-component-in-gatsby/61161331
Docs: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/

`npm install --save gatsby-plugin-react-sv`

Then put this the following in gatsby-config.js: 

```
plugins: [
  {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        name: `svgs`,
        rule: {
          include: /\.inline\.svg$/,
        }
      }
    },
];
```

then imported SVGS and include in files as Components (as per instructions on `gatsby-plugin-react-svg` page): 

```
import { ReactComponent as Circle } from "../assets/images/svgs/circle.inline.svg"

// ...

<Circle />
```

However this didn't work and after some frustration going through github/stackoverflow/blog pages nothing worked. It seemed the `gatsby-plugin-react-svg` plugin wasn't doing its job and it wasn't clear from either the documentation, or anything else, what I might be doing wrong. 

This is one reason I won't likely use Gatsby.js again on my own projects. Too opinionated, and too difficult to fix bugs when they come up. In React, Next.js is much more straightforward, since it's basically just React, but adapted for Server Side Rendering. 

instead, I made each SVG as a straight component: 

```
import React from "react";

const Circle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
        <title>Circle</title>
        <circle cx="50" cy="50" r="40" stroke="#012c52" stroke-width="3" fill="#012c52" />
        Sorry, your browser does not support inline SVG. 
    </svg>
  );
};

export default Circle;
```

And imported in the usual way: 
`import Circle from '../components/SVG/Circle'

// ...
<Circle />
```

And hey presto, the SVG appeared as it should. 

This means extra work, but I don't know - it can be more work trying to figure out why a plugin isn't doing what it should. Sometimes it's easier to just do it yourself. Generally, I prefer working as directly as a language as is practical, and avoiding the abstraction layers if at all possible. 


Create an animated logo: 
https://codepen.io/LiamChapman/pen/GQwegY

NOT EXACTLY SVG: 
create text outline: 
https://www.codesdope.com/blog/article/adding-outline-to-text-using-css/