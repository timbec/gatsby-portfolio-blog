---
title: Updating the Uranium City History Website
date: "2021-01-22T09:32:03.284Z"
description: "Steps and rationale behind updating my Uranium City History website"
featuredImage: "images/Town_view.jpg"
slug: "blog/updating-uranium -city-history-website"
---

<!-- 
Links: [Link text Here](https://link-url-here.org)

 -->

<!-- ## Updating the Uranium City History website -->

The website [Uranium City History]('https://uraniumcity-history.com') is the second site I built on my own (the first being my original portfolio site, built on Wordpress). I built it on Wordpress, which was a good choice at the time - Wordpress was at the height of its popularity pre-Gutenberg, and it had all the qualities of a CMS I needed to easily add and update content. 

The project was an outgrowth of my own attempt to make a documentary about Uranium City, Saskatchewan. I'd grown up in Uranium City in the '70s and early '80s, not long before its last mine abruptly closed in 1982, cutting the town's population by 90% in just a few months. 

- documentary film attempt. 
- success publishing articles on a previous UC website at 'uraniumcity.org', a remarkably comprehensive site for the time, built by long-time resident Len Kilbreath. At one point, in those pre-social media days, corresponded with up a dozen ex-residents scattered across the globe. 
- Alas, in those pre-cloud days, I lost these and many years of email when my computer went down and its memory accidentally wiped out by the Apple store. 
- I as inspired in part by the website 'London Sound Survey', set up by my old fried, the recently deceased [Ian Rawes]('link'). 
- So I set up this website. Unfortunately, as Len himself warned me, "you'll find much of the energy that used to go to my site has gone to social media". And it was true - the recently created FB page 'Friends of Uranium City' was soon hoovering up the photos, stories and commentary that I had assumed would go to my website. This too, is the nature of the modern web. 

### Headless Wordpress

I'd still accumulated a lot of content, including hundreds of comments that it would be a shame to lose, but I knew upgrading the site to a more modern format would mean building the front end in some sort of javascript framework. 

By then, the Wordpress REST API was fully developed, with full integration of ACF custom fields, custom taxonomy and Custom Post Types. 

I considerd Gatsby.js, but the peculiar situation with the hundreds of image, which had at one point been stored in Cloudinary, created hundreds of errors that would mean reloading every image on the site. Gatsby.js, I decided, was just too opinionated. I wanted to stay in React, which I was then trying to get better at, so the obvious next choice was Next.js. 

### What is Next.js?

- describe Next.js
- Followed Brad Traversy's course. 
- Some challenges (how to create front page without constant API calls, giving users the ability to post comments)