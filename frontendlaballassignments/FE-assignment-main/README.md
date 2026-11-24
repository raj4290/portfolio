# FE-assignment
This repository contains solutions for **Frontend Assignment 1(theory)**.  
The assignment covers basic concepts of web technologies and HTML/CSS/JS .
# Frontend Theory Assignment

Q1/ Explain the HTTP Request–Response Cycle with a suitable diagram. Describe the major steps involved when a client (browser) requests a resource from a web server and receives a response.
Ans- When we type a URL in the browser, the browser (client) sends an HTTP request to the server. The server processes it and sends back an HTTP response.
The following steps are:
a) Browser sends request (GET/POST etc.) to server.
b) Server checks the request, finds the resource.
c) Server sends back response (status code + data).
d) Browser receives response and shows the page.
Ex: You type google.com → browser sends request → Google’s server replies with HTML → browser renders it.


Q2/ Briefly explain the purpose and key features of the following web technologies:
HTML,CSS, JavaScript, Bootstrap, jQuery, React.js 
Ans- 1. HTML (HyperText Markup Language)
Purpose: Provides the structure of web pages.
Key Features: a)Defines headings, paragraphs, links, tables, forms.
              b)Acts as the backbone of all websites.
              c)Semantic tags improve accessibility & SEO.
2. CSS (Cascading Style Sheets)
Purpose: Handles the design and presentation of web pages.
Key Features: a)Controls colors, fonts, layouts, spacing.
              b)Enables responsive design with media queries.
3. JavaScript
Purpose: Adds interactivity and logic to web pages.
Key Features: a)Updates content dynamically without reloading.
              b)Works with APIs for data exchange.
4. Bootstrap
Purpose: A CSS framework for fast, responsive design.
Key Features: a)Grid system for layouts.
              b)Mobile‑first design philosophy.
5. jQuery
Purpose: A JavaScript library that simplifies coding.
Key Features: a)Simplifies AJAX requests.
              b)Cross‑browser compatibility.
6. React.js
Purpose: A JavaScript library for building user interfaces.
Key Features : a) Efficient rendering with Virtual DOM.
               b) Strong ecosystem for modern web apps.


Q3/ What are client-side technologies and server-side technologies? Explain the difference between them with suitable examples.
Ans-Client-side technologies: Run in browser, handle presentation and user interaction.
Examples: HTML, CSS, JavaScript.
Server-side technologies: Run on server, handle business logic, authentication, and database operations.
Examples: PHP, Node.js, Java, Python.
Difference: Client-side = what user sees and interacts with; Server-side = behind-the-scenes processing and data management.


Q4/ What are block-level elements in HTML? Explain their characteristics and provide at least three examples.
Ans- Block-level elements are HTML elements that always start on a new line and by default take up the entire width of their parent container. They act like big rectangular boxes that stack vertically one after another.
Block elements have following characteristic:
1)Start on a new line → Each block element begins on a fresh line, pushing the next element below it.
2)Occupy full width → They stretch across the available horizontal space of their parent container.
3)Contain other elements → They can hold both inline elements (like <span>, <a>) and other block elements.
4)Used for layout & structure → They divide the webpage into sections (headers, paragraphs, divs).
Example: <div>,<p>,<h1> to <h6>,<section>,<article> 


Q5/ What are semantic elements in HTML? Explain their importance in web development and provide suitable examples.
Ans- Semantic elements are HTML tags that carry meaning about the type of content they contain. Unlike generic tags like <div> or <span>, semantic tags clearly describe their role in the webpage (e.g., header, navigation, article).
 Importance in Web Development:
Improves Readability → Developers can easily understand the structure of the page.
Accessibility → Screen readers and assistive technologies can interpret content better.
SEO Benefits → Search engines use semantic tags to understand webpage content, improving ranking.
 Examples of Semantic Elements
<header>,<nav>,<article>,<section>,<footer> 


Q6/ Write HTML code to create the following table:
Sr. No.   Name    Designation     Department
1         John    Manager         Sales
2         Smith   Sr.Manager      Marketing
3         Jane    Mananger        HR
The table should include appropriate table headings, rows, and columns.
Ans- <!DOCTYPE html>
<html>
<head>
    <title>Employee Table</title>
</head>
<body>
    <table border="1" cellpadding="8" cellspacing="0">
        <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
        </tr>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Manager</td>
            <td>Sales</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Smith</td>
            <td>Sr. Manager</td>
            <td>Marketing</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Jane</td>
            <td>Manager</td>
            <td>HR</td>
        </tr>
    </table>
</body>
</html>


Q7/ Write HTML code to create the following list using an appropriate combination of ordered/unordered lists:
River,Ganga,Yamuna,Brahmaputra,Narmada
Ans- <!DOCTYPE html>
<html>
<head>
    <title>Nested List Example</title>
</head>
<body>
    <ul>
        <li>River
            <ol>
                <li>Ganga</li>
                <li>Yamuna</li>
                <li>Brahmaputra</li>
                <li>Narmada</li>
            </ol>
        </li>
    </ul>
</body>
</html>


Q8/ Explain the different types of CSS used for applying styles to an HTML document. Describe each type with a suitable example.
Ans- Types of CSS:
1. Inline CSS
Definition: Styles are written directly inside the HTML tag using the style attribute.
Best Use: Quick fixes or when you want to style only one element.
Example: <p style="color: red; font-size: 18px;">This is inline styled text</p>

2. Internal (Embedded) CSS
Definition: Styles are written inside a <style> tag within the <head> section of the HTML file.
Best Use: Useful for single‑page projects where you don’t need external files
Example: <!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
    p {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Internal CSS Example</h1>
  <p>This paragraph is styled using internal CSS.</p>
</body>
</html>

3. External CSS
Definition: Styles are written in a separate .css file and linked to the HTML using the <link> tag.
Best Use: Large projects, multiple pages, professional websites.
Example: <!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>External CSS Example</h1>
  <p>This paragraph is styled using external CSS.</p>
</body>
</html>


Q9/ Differentiate between HTML, CSS, and JavaScript based on their role in developing a web page. Explain what each technology contributes to a website.
Ans- HTML (HyperText Markup Language)
Role: Provides the structure of the webpage.
Contribution:
1)Defines headings, paragraphs, images, links, tables, and forms.
2)Acts like the skeleton of the site — everything else is built on top of it.
3)Semantic tags (like <header>, <article>, <footer>) improve accessibility and SEO.

 CSS (Cascading Style Sheets)
Role: Handles the design and presentation.
Contribution:
1)Controls colors, fonts, spacing, layouts, and responsiveness.
2)Enables modern layouts using Flexbox and Grid.
3)Adds animations, transitions, and hover effects.
         Think of CSS as the clothes and makeup that make the skeleton look appealing.
 JavaScript
Role: Adds interactivity and logic.
Contribution:
Responds to user actions (clicks, typing, scrolling).
1)Updates content dynamically without reloading the page.
2)Validates forms, creates animations, and fetches data from APIs.
3)It’s the brain of the website — making it smart and interactive.


Q10/ Short Answer
Answer the following:
a. What is the role of Bootstrap in web development?
b. What is jQuery and why was it widely used in web development?
c. What is React.js and what problem does it solve in frontend development?
Ans- a. Bootstrap
Role: A CSS framework that speeds up web design.
Key Point: Provides ready‑made responsive layouts, grids, and components (buttons, navbars, modals) so developers don’t have to code everything from scratch.
b. jQuery
Definition: A JavaScript library.
Why Popular: It simplified DOM manipulation, event handling, animations, and AJAX calls with short, readable code. Back in the day, it solved cross‑browser compatibility issues, which made it a go‑to tool.
c. React.js
Definition: A JavaScript library for building user interfaces.
Problem Solved: Managing complex, dynamic UIs. React introduced a component‑based architecture and Virtual DOM, making updates efficient and apps easier to scale and maintain.
