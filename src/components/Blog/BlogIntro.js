import React from 'react';
import { Fragment } from "react"
import { Link } from "gatsby"


const BlogIntro = () => {
    return (
        <article className="blog__intro">
            <h2 className="blog__intro--title">Welcome to my Blog</h2>
            <div className="blog__intro--content">
                <p>
                    This is part of an ongoing series based on the principle of 'learning in public'.

                    I don't plan on writing anything groundbreaking for now, I just want to get in the habit of writing about what I do for a living, what I'm learning, and things I find interesting. I write about, in no particular order, web development, Blockchain technologies, including NFTs, the Metaverse, Machine Learning and AI generally.
                </p>

                <p>As I gain more knowledge (and frankly confidence), I plan to write about books and articles I'm reading, perhaps providing reviews, as well as tech trends I find interesting (or troubling - we certainly have no shortage of that). </p>

                <p>For the moment, I plan on putting up articles as I write them, but soon I will add categories and tags, creating separate pages for each category. Then . . . commenting.</p>

                <p>I used to blog quite a bit, as was the trend in the late '00s and early '10s, when social media still allowed for such things like small-fry bloggers such as me. When social media was still seen as a force for good (Oh, how naive we were). One of these blog still exists at: https://livefromtheheygate.blogspot.com/. For the other, I will eventually put up selected posts on my writing site at: https: timbeckett-writing.com. </p>
            </div>


        </article >
    )
}

export default BlogIntro;