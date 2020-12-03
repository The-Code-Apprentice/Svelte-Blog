---
date: "2020-12-03"
title: "The Internet and Other Powers Behind Your Web Experience"
slug: "the-powers-behind-your-web-experience"
summary: "Welcome! I made my first website (and its not this one). But first I had to understand the state and standards of the internet. How does your browser work? and how will I deliver a great web experience?"
published: true
tags: ["internet", "http", "html", "css", "js"]
---

Hey! Welcome to my first post on this blog about technology, programming and my learning experiences. I want this blog to be an opportunity for me and you to learn, gain insights and perhaps observe some of the trends and history lying within. First up is the internet.

To better understand the web, I challenged myself to create a unique web experience. An experience that you can now have at [schoolprison.com](https://www.schoolprison.com)! Although as I discovered, understanding how a web experience works and how one is built are very different. Lets start with the former (and leave the latter for another post).

---

## The state of the Internet

As of October 2020, over [4.9](https://www.internetworldstats.com/stats.htm) billion people are Internet users (thats 63.2%!). Incredible growth considering the first website was created in 1991. But what surprised me most is how active this growth still is everywhere. The percentage of households using the Internet in the USA only surpassed that of cars [in the past year!](https://ourworldindata.org/grapher/technology-adoption-by-households-in-the-united-states?tab=chart&stackMode=absolute&time=1930..2019&country=Automobile~Cellular%20phone~Colour%20TV~Computer~Ebook%20reader~Internet~Podcasting~Radio~Smartphone%20usage~Social%20media%20usage~Tablet&region=World) Internet access is growing worldwide and I might venture to predict that it will plateu at (or imperceptibly underneath) 100%. Why aren't we there yet? The internet remains unaffordable to many people, particularly in low-income countries where [1GB of mobile data can cost as much as a third of a months salary](https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data).

Other noticeable trends happening around the Internet:
- The amount of time spent online is increasing. The global average has gone from just over 1 hour per day to 3 in the past [decade](https://www.statista.com/statistics/319732/daily-time-spent-online-device/#:~:text=According%20to%20Zenith%20Optimedia%2C%20in,to%20155%20minutes%20in%202021.).
- More and more mobile Internet usage. In fact the previously mentioned growth is all mobile as desktop usage is stagnating. 
- Social media usage is growing with the Internet. There are now 6 platforms with over half a billion [users](https://ourworldindata.org/rise-of-social-media).
- Webpage filesizes are getting huge (some even say [obese](https://idlewords.com/talks/website_obesity.htm)). The size of the most popular 1000 webpages has quadrupled to [2MB](https://httparchive.org/reports/page-weight) over the past decade. A worrying trend considering the high cost of Internet to some. To make things worse, most of this growth is a result of pesky ads.

---

## The Internet Works on Every Layer

Essentially, the Internet is a collection of inter-connected computers communicating with one another. The OSI model defines all the layers such a system should have to function reliably and consistently:

1. Physical layer to transmit raw data (usually in the form of electrons or photons)
2. Data Link layer to align and synchronize physical signals
3. Network layer to route those signals between indirectly connected devices 
4. Transport layer to segment and ensure complete transmission of data
5. Session layer to establish, control and close connections
6. Presentation layer to define the syntax for information used by different applications
7. Application layer to enable human interaction

Luckily for us we will take the first five layers for granted. Engineers, researchers, manufacturers and construction workers, have allready designed the protocols (i.e. TCP, IP, DSL, SSL) and built the devices that realise these layers. Instead we will focus on the presentation and application layers and move on to the web, an information service built on top of the Internet infastructure. 

![Inception](./images/1/inception.gif)
<center><h5>There is always another layer.</h5></center>

---

# The Web Browser

We usually experience the Internet through a browser. In fact, most of us experience the Internet with one browser in particular. 

Browsers primarily fetch resources, interpret them, and execute javascript. They are to a great extent rule followers. Their key functionalities are defined by standards set out by various organisations. HTTP by [IETF](https://www.ietf.org/), HTML and CSS (the holy trinity) by [The World Wide Web Consortium (W3C)](https://www.w3.org/), and javascript by [ECMA International](https://www.ecma-international.org/memento/tc39.htm). The browsing experience relies on these core technologies.

---

## HTTP, the Evolving Communication Protocol

You open your browser and start with a url, lets say `https://www.mozilla.org/`. You would probably just type in `mozilla.org` (or `mozilla.com` but that wouldn't take you where you wanted). If you use the latter, the browser will infer that you want to use `http` (Hypertext Transfer Protocol) or the encrypted version thereof `https`.

HTTP is an application layer protocol for transmitting hypermedia documents (remember the holy trinity?) over the Internet. It defines a stateless client-server model for communication. The client opens a connection with a server in order to send requests. The connection closes when the client receives a response from the server. No data is stored between requests on the server (or at least not explictly by the protocol itself). 

HTTP messages carry:
- A start-line specifying the request and status 
- Headers with additional descriptors  
- A body with data such as a HTML file or form data input by a browser user.

Here is what a typical HTTP request-response cycle looks like:
```HTTP
GET /school_or_prison/img/concrete_slab.jpg HTTP/1.1
Host: schoolprison.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://www.schoolprison.com

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/jpg
Date: Thu, 30 Nov 2020 13:55:46 GMT
Last-Modified: Wed, 21 Oct 2020 20:54:50 GMT
Server: Apache
(image content of 3077 bytes)
```
Notice this is a `HTTP/1.1` request, a standard in use since January 1997. Since then the HTTP protocol has been gradually expanded upon. `HTTP/2`, released May 2015, sends messages in a binary format and allows parallel requests over the same connection.Historically, HTTP messages run on top of the Transportation Control Protocol (TCP - level 4 - Transport Layer) and the Internet Protocol (IP - level 3 - Network Layer). 

`HTTP/3` is being deployed and implemented in browsers right now. It replaces TCP and introduces technology developed by Google in it's most early stages. Remember how I said browsers are rule followers, some might be becoming rule setters.

![Cloud](./images/1/FetchingPage.jpg)
<center><h5>Confused yet? You can always go back to believing in the cloud.</h5></center>

If you're itching for more detail, this [github post](https://github.com/alex/what-happens-when#) answers the question "What happens when you type google.com into your browser and press enter?" with intense detail. Seriously, it even covers your keyboard's electrical circuit.

Every website relies on three resource types to provide their experience:
- HTML defines the structure of a page and encapsulates the content.
- CSS describes the appearance of a webpage
- JavaScript, a programming language executed by your browser to add interactivity

---

## HTML, The Structure of the Web

HTML (HyperText Markup Language) is built up with elements. Think for a moment about what components every site needs... Perhaps a header? and text boxes? Elements are created with tags. A text element for example has an opening tag `<p>` and a closing tag `</p>`with the text to be displayed inbetween. Most modern websites are expected to feature images which use a single self-closing tag within which the image source and size can be specified using a HTML feature called attributes: `<img src="really_cool_image,jpg">`. 

The World Wide Web Consortium or W3C defines a [specification](https://html.spec.whatwg.org/#toc-semantics) which outlines all current HTML elements. There is around count 112~113. Some elements specify, categorise or group content. Other elements style or semanticize text .The specification defines how each should be used and, maybe more importantly how each should be interpreted by your [browser](https://brave.com/).

There are few questionable elements there. Does every website need a `<bar>` or `<meter>`? and what’s a `<dfn>`? My favourite html element is `<div>`: 

```HTML
<div class="container">
  <div>It’s really flexible and lets me build what I need.</div>
  <div>Including the meter on <a href="https://www.schoolprison.com">my site</a></div>
  <div>No W3C standard <meter> for me. Thank you.</div>
</div>
```

<div class="container">
  <div>It’s really flexible and lets me build what I need.</div>
  <div>Including the meter on <a href="https://www.schoolprison.com">my site</a></div>
  <div>No W3C standard &lt;meter&gt; for me. Thank you.</div>
</div>

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container div {
    width: 100%;
    padding: 5px;
    border: 1px solid white;
    text-align: center;
}
</style>

<div class="silhouette status-bar__silhouette">
    <div class="status-bar__bar"/>
</div>

---

## Its Fancy Thanks to CSS

<style>
    .silhouette {
        position: static;
        height: 28px;
        border-radius: 14px;
        background-color: #444;
        box-shadow: 0 1px 1px 0 hsla(0, 0%, 100%, 0.2),
            inset 0 1px 1px 0 rgba(0, 0, 0, 0.5);
    }
    .status-bar__silhouette {
        width: 100%;
        margin-top: 12px;
        margin-right: auto;
        margin-left: auto;
    }
    .status-bar__bar {
        position: relative;
        top: 4px;
        left: 4px;
        right: 16px;
        height: 20px;
        width: 50%;
        border-radius: 10px;
        background-color: yellow;
    }
</style>

Cascading style sheets are interpreted by your browser to style HTML elements - their colors, size, fonts, relative positions and much more. The W3C provides a complete and up to date modern specification. 

Their are various ways or selectors to specify what elements to style. Elements can be assigned unique `id`s or grouped into a `class`. CSS can also select elements by their type `button`, state `button:hover` and relationship to other elements on a page.

Check out how I got those boxes above working;

```CSS
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container div { /* This selects any div inside .container */
    width: 100%;
    padding: 5px;
    border: 1px solid white;
    text-align: center;
}
```

CSS can be extremely powerful. Styling can be defined with incredible detail and precision allowing you to create immensely personal web experiences. A nice looking site is not only important in terms of usability but also for building trust. 

I wanted my website to feel a little chunky so I gave the buttons depth following an exaggerated neumorphic style. Thats new skeuomorphism and even [Apple is doing it](https://www.inputmag.com/design/apple-macos-big-sur-the-rise-of-neumorphism). 

<div class="button-platform button-platform--school">
  <a href="https://www.schoolprison.com" class="button button--school"> It's a trap!
  </a>
</div>

<style>
  .button-platform {
    display: flex;
    justify-content: center;
    width: 90%;
    z-index: 5;
    min-height: 95px;
    min-width: 136px;
    box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  }

  .button {
    z-index: 6;
    min-width: 124px;
    width: 80%;
    height: 72px;
    border-style: solid;
    border-width: 1px;
    border-radius: 14px;
    text-decoration: none;
    font-family: Impact, Oswald, Haettenschweiler, "Franklin Gothic Bold",
      Charcoal, sans-serif;
    font-size: min(10vw, 70px);
    line-height: 72px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .button-platform--school {
    position: relative;
    border-radius: 14;
    background-image: radial-gradient(
      circle farthest-corner at 50% -50%,
      #ed997c,
      #ee5622
    );
  }

  .button--school {
    position: absolute;
    top: 10px;
    bottom: auto;

    color: #c7c7c7;
    border-color: #e7e7e7;

    background-color: hsl(15, 86%, 53%);
    box-shadow: -4px -6px 10px 0 hsla(0, 0%, 85.1%, 0.34),
      4px 12px 16px 0 rgba(0, 0, 0, 0.35);
    text-shadow: 0 -1px 3px rgba(0, 0, 0, 0.35),
      0 1px 3px hsla(0, 0%, 85.1%, 0.8);
  }

</style>

Thats over 50 lines of styling and it doesn't even move! I might have gone a little overboard.

---

## Transitions and animations.

When you add or remove a style class to an element, you update how it looks (depending on CSS prioritization). Transitions are a CSS feature that let you specify the duration (and therefore rate) over which the value will change smoothly. You can even specify a [cubic bezier](https://cubic-bezier.com/) to vary the rate of change throughout your transition. Transitions are limited to transitions between two values. 

To access more functionality, you will need to use CSS animations. A css animation is specified by keyframes at percentage intervals. Every keyframe specifies property values at a point in the animation. This lets you interpolate between countless values at different rates. Animations are assigned to CSS classes along with a duration or perhaps even a looping configuration.

If you’re lazy, a good thing in programming, you can just use someone else’s styling. CSS can be included directly in a HTML document or in a seperate documented at a URL specified in the HTML. This document can be provided by your own websites server or someone else’s. Like material UI which is used by over [72’000 sites](https://trends.builtwith.com/framework/Material-UI).

---

## Javascipt, a Feature-Rich Programming Language

All major web browsers come with a built in Javascript engine. This engine executes javascript code provided by servers much like CSS. Some major web functionality is provided by javascript features like:
- Event listeners that trigger when you interact with websites
- a Document object referring to the HTML rendered enabling live manipulation
- a Fetch function to send dynamic http requests
- Asynchronous programming to enable code to execute while waiting for tasks, like a request, to complete.

There are many more advanced and unique features that make javascript rather special: 
- Object Prototypes
- Promises
- This (thats confusing)

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) is a great (and free) resource to learn about all of javascripts great features.

So we are ready to build a website now. All we have to do is write it all up in HTML, style it with some CSS and then add Javscript! Right?

Well, you probably shouldn't do it that way. Especially if you are getting paid. Instead the best sites uses a front-end framework. They …are extremely popular …come in many sizes (measured in bytes) …work in innovative, unique and disputed ways, …are the topic for my next post on the web.

---

<footer><h5 id="thanks">Thanks for visiting. The Code Apprentice.</h5></footer>

<style>
  h5 {
	  font-size: 14px;
  }
  #thanks {
    margin-top: 20px;
  }
  footer {
    width:100%;
    height:60px;
    color: white;
    text-align: center;
  }
</style>





