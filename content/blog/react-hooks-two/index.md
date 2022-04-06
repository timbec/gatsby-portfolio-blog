---
title: React Hooks - useEffect()
date: "2022-03-17T22:12:03.284Z"
description: "React Hooks: useEffect. Part of a series: what I learned rebuilding by legacy Uranium City History website"
featuredImage: react-1.png
slug: "blog/react-hooks-use-effect"
---
[comment]: <> (https://www.freecodecamp.org/news/the-react-cheatsheet/#react-useeffect-hook)

 The `useEffect()` React hook is used to interact with interfaces like APIs that are 'outside' the app that may not feed us the data we're expecting. The basic syntax requires a function that as a first argument, an array as a second argument. A basic example: 

 ```
 function newComponent() {
     useEffect() => {
         // perform side effect
     },[]}; 
 };
 ```

 to use `useEffect()` to fetch a list of posts, we would do so like this: 

 ```
 import { useEffect } from 'react';

 function ListOfPosts() {
     const [post, setPosts] = useState([]);

     useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(posts => setPosts(posts));
     }, []);

     return posts.map(post => <Post key={post.id} post={post} />)
 }
```

However, if we need to use a value from outside the *effect* function, that value must be included in the dependencies array. If that value changes, the *effect* function will be re-executed. 

In the following, the class `overflow-hidden` is added or removed from the body element whenever a mobile menu is opened or closed. 

```
function MobileMenu({ open }) {
    useEffect(() => {
        const body = document.querySelector('#__next');

        if(open) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    },[open]);

    // . . . 
}
```


sources: 
https://www.freecodecamp.org/news/the-react-cheatsheet/#react-useeffect-hook