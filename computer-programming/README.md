# [Computer Programming](https://www.khanacademy.org/computing/computer-programming) <!-- omit in toc -->

- [Intro to JS: Drawing & Animation](#intro-to-js-drawing--animation)
- [Intro to HTML/CSS: Making webpages](#intro-to-htmlcss-making-webpages)
- [Intro to SQL: Querying and managing data](#intro-to-sql-querying-and-managing-data)
- [Advanced JS: Games & Visualizations](#advanced-js-games--visualizations)
- [Advanced JS: Natural Simulations](#advanced-js-natural-simulations)
- [HTML/JS: Making webpages interactive](#htmljs-making-webpages-interactive)
- [HTML/JS: Making webpages interactive with jQuery](#htmljs-making-webpages-interactive-with-jquery)
- [Meet the professional](#meet-the-professional)


## [Intro to JS: Drawing & Animation](https://www.khanacademy.org/computing/computer-programming/programming)

- **JavaScript** is one of the most popular programming languages in the world.
- A **programming language** typically includes ways to store data in computer memory, manipulate that data, organize code and run code repeatedly. I learnt how to do all of that in JavaScript via:
  - **Variables**: how to declare variables, assign, re-assign, and local vs. global scope.
  - **Data** types: numbers, booleans, strings, arrays, and objects.
  Functions: how to group code into functions, pass arguments to them, and return values from them.
  - **Conditionals**: how to use if/else statements and logical expressions.
  - **Loops**: how to use while and for loops to repeat code.
- **ProcessingJS** is the "library" we used to make a drawing & animation.
- **Library** is a collection of functions that other programmers created, and those functions know how to draw pixels into a canvas on the page. Examples:
  - **Shapes**: like `rect()`, `ellipse()`, and `line()`
  - **Colors**: like `fill()`, `stroke()`, and `background()`
  - **Text**: like `text()` and `textSize()`
  - **Events**: like `draw()` and `mousePressed()`
  - **Math**: like `random()` and `dist()`


## [Intro to HTML/CSS: Making webpages](https://www.khanacademy.org/computing/computer-programming/html-css)

- **Web** is a network of computers that have websites. 
  - **Server** is a computer that serves the website.
  - website is made of three languages:
    - **HTML** for marking up the website content
    - **CSS** for styling the website
    - **JavaScript** for making it interactive
  - **Browser** is an application used to access website.
    - Google Chrome, Mozilla Firefox, Safari, Edge, Opera, Internet Explorer, & etc...
  - **Clients** are the ones we used to open a browser and access websites.
    - Computer, Laptop, iPad, Tablet, iPhone, Smartphones, etc...
- **HTML (HyperText Markup Language)** is the standard markup language for documents designed to be displayed in a web browser.
  -  tags, starts (`<element>`) and ends (`</element>`) with angle bracket (`< >`).
  - The contents of an HTML tag are the stuff that goes between the opening and closing tags.
  - Any content that is visible on the web page should go between the opening `<body>` tag and the closing `</body>` tag
  - Headings are based on most important to least important, `<h1>` to `<h6>`
  - `<p>` tag is used to make paragraph.
  - browser ignores line breaks and whitespace, use `<br>` to render a line break
  - <em> is used to emphasize the word/s, `<strong>` will make the word/s bold to stand out
  - `<li>` to make a list inside of `<ul>` for unordered list or `<ol>` for ordered list
  - `<img>` to add image, `src` attribute to add/source the url of the image and `alt` attribute to add image description
- **CSS (Cascading Style Sheets)** language used for describing the presentation of a document written in HTML
  - **selector** is the way of CSS to style html elements and are case sensitive
  - css declaration starts with selector followed by curly braces (`{` and `}`), property and values are declared inside
  - **element selector** are tag names without brackets (`<` and `>`)
  - `color` property specifies the color of text
    - `RGB` color value is specified with: `rgb(red, green, blue)`.
  - `background-color` property sets the background color of an element.
  - **id selector** is came from one of the html elements with an attribute of `id="nameOfId"`, **Note**: ID should be unique
  - **class selector** is came from one of the html elements with an attribute of `class="nameOfClass"`, classes can be repeated to a number of elements to style them in the group
- **More HTML tags**
  - hypertext is a text connected to other text that the reader can immediately jump to.
  - Tim Berners-Lee invented HTML, HTTP and etc, to connect text to other text.
  - `<a>` or anchor tag to make a link or hyperlink
    - `href` or hypertext reference attribute to add url or the address
    - `target="_blank"` to make the link open to another window tab
    - internal links are links on the same webpage targetting the id attribute, so it should start with `#` sign
  - `<table>` to make a table
    - `<thead>` to start the header, inside it `<tr>`, then `<th>` for the columns
    - `<tbody` to add the contents of the table, `<tr>` for row and then add `<td>` for table data
  - `<!-- comments -->` for humans to read, it can instructions for future maintainers of the site, browser/computers will ignore comments
- **CSS text properties**
  - CSS Zen Garden is an example of how powerful CSS is. It's a gallery of designs of different developers that uses the same HTML and add their own CSS.
  - `font-family` specifies the font for an element.
    - can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.
    - **family-name**:"`times`", "`courier`", "`arial`", etc.
    - **generic-family**: "`serif`", "`sans-serif`", "`cursive`", "`fantasy`", "`monospace`".
    - usually code editors uses `monospace` font which is a fixed width
  - `font-size` sets the size of a font.
    - `px` for pixels, `em` is a relative unit to his parent element
  - `font-style` specifies the font style for a text, and is mostly used to specify italic text
  - `font-weight` sets how thick or thin characters in text should be displayed.
  - `font` is a shorthand property for: `font-style`, `font-weight`, `font-size` and `font-family`
  - `line-height` specifies the height of a line.
  - `text-align` specifies the horizontal alignment of text in an element.
  - `text-decoration` specifies the decoration added to text
    - values: `underline` or `none`
  - **inheritance** controls what happens when no value is specified for a property on an element, until another property overrides it
- **Web development tools**
  - Using the browser developer tools
    - The browser developer tools which are included in most modern browsers are a big favorite of most developers. Each browser differs in exactly which tools they provide, but they're more similar than they are different.
    - **Inspecting HTML** is one great tool ability to right click on any element on a webpage and inspect the HTML for that element.
    - **Inspecting CSS** using CSS inspector to check out which styles gets applied to an element and play with them yourself.
  - Developing webpages outside of Khan Academy using other tools
    - **Online editors** is similar to the khan academy's editor but with additional features.
      - E.g. `JSBin`, `Repl.it`, `Glitch`, `Cloud9`, and `CodePen`.
    - **Desktop editors** app is downloaded to your computer and saves the files to your hard drive.
      - E.g. `Visual Studio Code`, `Atom`, `Sublime Text`, `Adobe Brackets`, and `Notepad++`.
    - **Command-line editors** if you love typing and navigating with your keyboard instead of your mouse.
      - Two popular command-line editors are `Emacs` and `Vim`, and they are often already installed on Unix-based systems like Macs and Linux.
    - **Hosting your website on a server**
      - When you visit websites on the internet, they are each hosted by a "server".
      - **Server** is a computer located somewhere in the world that's connected to the internet, and that computer's job is to "serve" webpages to internet users that want to view them.
      - Disadvantages on using khanAcademy server
        1. your webpages have a bunch of Khan Academy user interface surrounding them
        2. your webpage has "khanacademy.org" in the URL, and
        3. you can only create single webpages, not multi-file websites.
      - All of that is great when your goal is learning, but not ideal if your goal is to create a professional looking website, like a portfolio, resume, or shop.
      - Many companies are "hosts" or "hosting providers", and they make money by letting people host your webpage files on their servers.
      - You might also want your own domain name - like "khanacademy.org" or "yourownname.com". You can buy those from a "domain name registrar", pay a small amount each year to keep them around, and then point that domain to your server. 
  - Hosting your website on Github
    - [Github](http://github.com/) is a company that hosts "code repositories", collections of code for projects.
      - Many of the code repositories are "open source", which means they're publicly available for the whole world to browse.
      - Code repositories can contain all sorts of types of code, not just HTML and CSS - whatever code is needed to make the project work.
      - Github has a feature called [Github Pages](https://pages.github.com/), which makes it easy and free for you to create a multi-file website hosted at yourusername.github.io.
    - Sign up for a Github account
    - Create a Github project for your website
    - Upload multi-file websites to Github
- **CSS layout**
  - `<span>` is inline level element to group text w/ no semantic meaning for styling purposes
  - `<div>` is a block level element to group elements w/ no semantic meaning for styling purposes
  - `width` sets the width of an element.
  - `height` sets the height of an element.
    - `auto` value will automatically adjust its height to allow its content to be displayed correctly.
  - `overflow` specifies what should happen if content overflows an element's box.
    - only works for block elements with a specified height.
    - Value: `hidden`, `scroll`, `auto` and `visible` which is the default
  - Box Model
    - All HTML elements can be considered as boxes.
    - "box model" is used when talking about design and layout.
    - It consists of: margins, borders, padding, and the actual content.
  - `margin` are used to create space around elements, outside of any defined borders.
    - `auto` value lets the browser calculates the margin
    - `%` specifies a margin in % of the width of the containing element
  - `padding` are used to generate space around an element's content, inside of any defined borders.
  - `border` is a shorthand property for `border-width`,  `border-style` and `border-color`; E.g. `border: 2px solid red`
  - `position` specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky)
    - `static` value is the default position of the HTML elements
    - `relative` is positioned relative to its normal position
      - Set the `top`, `right`, `bottom`, or `left` to adjust away from its normal position
    - `absolute` is positioned relative to the nearest positioned ancestor
    - `fixed` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
    - `sticky` is positioned based on the user's scroll position
  - `z-index` can have a positive or negative number that specifies the stack order of an element (which element should be placed in front of, or behind, the others)
  - `float` is used for positioning and formatting content, E.g. let an image float left to the text in a container.
    - Values: `left`, `right`, and `none` is the default
  - `clear` specifies what elements can float beside the cleared element and on which side.
    - Values: `left`, `right`, `none` which is the default and `both` for no floating elements allowed on either the left or the right side
  - Planning a webpage
    - Brainstorming: Use the "Yes, and..." approach
    - Paper prototyping
    - Wireframes: Using tools like balsamiq


<!--
## [Intro to SQL: Querying and managing data](https://www.khanacademy.org/computing/computer-programming/sql)
## [Advanced JS: Games & Visualizations](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations)
## [Advanced JS: Natural Simulations](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations)
## [HTML/JS: Making webpages interactive](https://www.khanacademy.org/computing/computer-programming/html-css-js)
## [HTML/JS: Making webpages interactive with jQuery](https://www.khanacademy.org/computing/computer-programming/html-js-jquery)
## [Meet the professional](https://www.khanacademy.org/computing/computer-programming/meet-the-computing-professional)
-->