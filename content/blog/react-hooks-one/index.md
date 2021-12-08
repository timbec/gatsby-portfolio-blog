---
title: React Hooks - useState()
date: "2021-12-06T22:12:03.284Z"
description: "React Hooks: useState. First in a series"
featuredImage: react-image.jpg
slug: "blog/react-hooks-use-state"
---
[comment]: <> (https://daringfireball.net/projects/markdown/syntax#link)
[comment]: <> (Photo Credit <a href="https://unsplash.com/@lautaroandreani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lautaro Andreani</a> on <a href="https://unsplash.com/s/photos/javascript?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  )

# React Hooks: First In a Series: useState()

I'm currently trying to master React.js, and a big part of mastering modern Read is mastering . . . React Hooks. I've use React Hooks for awhile, but never fully understood what they were doing under the hood, and what need they served. This is my attempt to describe what I've learned, in the clearest terms possible (or possible for me). 

I recently encountered `useState()` while building out a new front end from a legacy Wordpress site at my [Uranium City History Project](https://uraniumcity-history.com) on Next.js. I referenced Brad Traversy's excellent ['Next.js Dev to Deployment'](https://www.udemy.com/course/nextjs-dev-to-deployment) course on Udemy. I love Brad's approach and his accessible style, but he doesn't explain things in depth. As he says himself, he leaves it to you, the learner, to look up the documentation on the concepts. He just shows you how to use them. 

Two important variables are initialized thus: 

```
export default function NewsPage() {
    const [newsPosts, setNewsPosts] = useState([]);
    ....

    return (
    ....
    )
}
```

What basic function did `useState` provide?  

First: what is **state**? 

**State** is one of those concepts that seemed almost metaphysical in its complexity when I first encountered it. So complex that I assumed I'd never fully get my head around it, and thus would never be able to master React.  

But thanks to the excellent [CS50 'Introduction to Artificial Intelligence with Python'](https://cs50.harvard.edu/ai/2020/) course (which I audited, but did not actually take), I discovered that the concept of **state** is quite simple. 

> a configuration of the agent and its environment. 

Put more clearly: State is wherever we are in a program, and to move from state to state, we use *actions*. Some actions can be performed on certain states, and not others. In a game of checkers, the squares of the checkerboard are our state, and *action* we perform our to move from one square, one state, to another. 

We have an **initial state** and a **goal state** and in our above example: 
`const [newsPosts, setNewsPosts] = useState([]);`
our `newsPosts` is initialized as an empty array. This is the initial state. `setNewsPosts` will eventually populate this `newsPosts` array with our data, in this case, an array of news posts from the Wordpress API. 
The updated array will be our goal state

`useState()` is the most important of React Hooks, allowing us to use state without having to write a class component. *Hooks* allow for much cleaner, easy-to-read code, and have changed React for the better. Before React 16.8, when **hooks** were introduced, to use state, we had to write a *class* component. The above would have been written: 

```
class News extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            newsPosts = []
        };
    }

    render() {
        return (
            
        )
    }
}
```

You can see how this can get verbose. Especially when, you start passing down props. Even the relatively simple declaration above, would have to be referenced with: 
`this.state.newsPosts`

And so on. 

**Hooks** have made React much easier to use. Before the advent of hooks, I frankly found React difficult to use, too verbose and complicated, especially compared to **Vue.js**. Thankfully **React Hooks** have made using React that much easier to use, that much cleaner to read. 

Next up: **`useEffect()`**