# [Intro to HTML/CSS: Making webpages](https://www.khanacademy.org/computing/computer-programming/html-css) <!-- omit in toc -->

- [Intro to HTML](#intro-to-html)
- [Intro to CSS](#intro-to-css)
- [More HTML tags](#more-html-tags)
- [CSS text properties](#css-text-properties)
- [Web development tools](#web-development-tools)
- [CSS layout](#css-layout)
- [More CSS selectors](#more-css-selectors)
- [Other ways to embed CSS](#other-ways-to-embed-css)
- [Further learning](#further-learning)


## Intro to HTML

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
- `<em>` is used to emphasize the word/s, `<strong>` will make the word/s bold to stand out
- `<li>` to make a list inside of `<ul>` for unordered list or `<ol>` for ordered list
- `<img>` to add image, `src` attribute to add/source the url of the image and `alt` attribute to add image description


## Intro to CSS

- **CSS (Cascading Style Sheets)** language used for describing the presentation of a document written in HTML
- **selector** is the way of CSS to style html elements and are case sensitive
- css declaration starts with selector followed by curly braces (`{` and `}`), property and values are declared inside
- **element selector** are tag names without brackets (`<` and `>`)
- `color` property specifies the color of text
  - `RGB` color value is specified with: `rgb(red, green, blue)`.
- `background-color` property sets the background color of an element.
- **id selector** is came from one of the html elements with an attribute of `id="nameOfId"`, **Note**: ID should be unique
- **class selector** is came from one of the html elements with an attribute of `class="nameOfClass"`, classes can be repeated to a number of elements to style them in the group


## More HTML tags

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


## CSS text properties

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


## Web development tools

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


## CSS layout

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


## More CSS selectors

- using multiple CSS classes, elements can hold multiple class separated by space, E.g. `<p class="fact warning">`
- combining CSS class and element selectors without space, E.g. `p.warning {}`
- CSS descendant selectors matches all elements that are descendants of a specified element, E.g. `p span` or `ul.space li strong`
- grouping CSS selector must separated by comma (`,`), E.g. `h1, h2, h3`
- CSS dynamic pseudo-classes start with colon
  - `:active` select and style the active link
  - `:checked` matches every checked `input` and `option` element
  - `:disabled` matches every disabled element (mostly used on form elements)
  - `:focus` select the element that has focus
  - `:hover` select elements when you mouse over them
  - `:link` selects all unvisited links
  - `:visited` select visited links
- CSS specificity
  - add **1000** for `style` attribute
  - add **100** for each `id`
  - add **10** for each `attribute`, `class` or pseudo-class
  - add **1** for each element name or pseudo-element


## Other ways to embed CSS

- using **inline CSS styles** may be used to apply a unique style for a single element `<h1 style="background: red; color: white">`
  - Best to use inline styles is when prototyping a webpage to see what it looks like quickly
  - **Note**: as much as possible avoid the inline styling to avoid messing on HTML
- using **external stylesheets** can change the look of an entire website by changing just one file with a `.css` extension
  - defined within the `link` element, inside the `head` section of an HTML page


## Further learning

- **Webpage design**
  - **Picking good fonts**
    - shouldn't use more than two or three font families on a page, and your fonts should pair nicely together, E.g. [Google Web Fonts](https://fonts.google.com/)
  - **Picking good colors**
    - use a **color palette** which is a range of colors that work well together and can be used for the various parts of your webpage, E.g. [Paletton](http://paletton.com/) tool lets you visualize different types of palettes: monochromatic, triads, adjacent colors, and tetrads
    - As you decide on how your palette will translate into CSS, consider a few things:
      - If you change the styling of links too much from the default, users may not realize they're links anymore.
      - The colors of foreground/background text should contrast enough that your users don't need to squint. Check your colors in this [contrast checker](http://webaim.org/resources/contrastchecker/).
      - Many humans are color blind. Some color combinations won't have sufficient contrast for them. Check your colors in this [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).
  - **Using whitespace well**
    - **Whitespace** refers to any blank space between elements, and in CSS land, it usually comes from properties like padding, margin, and line-height
  - **Starting from templates and frameworks**
    - **template** is HTML and CSS that already looks like a complete webpage, often with fake content filled in, E.g. [OpenDesigns](http://www.opendesigns.org/)
    - **CSS framework** is a collection of CSS rules that give you a great starting point for a slick website, E.g. [Bootstrap](https://getbootstrap.com/), [Foundation](https://foundation.zurb.com/), [Pure CSS](https://purecss.io/), [Topcoat](http://topcoat.io/), and etc.
- **HTML validation** is a step to checkif the HTML are valid and no syntax errors, E.g. [W3C validator](https://validator.w3.org/) tool where you can paste or upload your file to check for html validity