# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![image](https://github.com/Nospiel-code/fm-results-summary/assets/130290610/073f2387-1c72-45a4-bbb4-b4c975e4c1e2)


### Links

- [Solution URL](https://github.com/Nospiel-code/fm-results-summary)
- [Live Site URL](https://nospiel-code.github.io/fm-results-summary/)

## My process

This is the second challenge that I did following a YouTube video. I like to do this from time to time to see the workflow of experienced frontend developers and learn from their way of solving the problem.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Attribute Selectors

### What I learned

Using the attribute selector **data-spacing** to change the default spacing of a group selector.
Another way to use the data attribute selector is to use different colours like we did here with the **data-item-type**. 
The advantage over custom properties is that they could inherit from the parent element. In this project we use the attribute selector for padding (data-spacing), if we would use custom properties the padding from the parent could affect the child.

The **SVG stroke property** defines the color of the line.

I learned how to use the at-rule **@font-face** to load fonts.

For the **box-shadow** it is usefull to use hsl-color, because it is easy to control the opacity with it.

How to use **locally scoped custom properties**. In this case we used it to define the border radius and the padding. We define a custom property in the parent (result-summary) and use the custom property on the child (results).

How to use **[align item](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)** in the grid system. In this case the align-item start.

The **aspect-ratio** is used here so that the circle has a perfect round shape.

How to use the CSS **calc()** function.


### Useful resources

- [Kevin Powell YouTube Walkthrough](https://www.youtube.com/watch?v=KqFAs5d3Yl8&ab_channel=KevinPowell) - As mentioned before, I used a YouTube video to solve this challenge.
- [How to import JSON in JS](https://tutorial.eyehunts.com/json/how-to-import-json-file-in-html/) - In the YouTube video the scores were hardcoded and the JSON file was not used. I find this website and used the code to use the data from the JSON file that was previded from Frontend Mentor.
- [How to use JavaScript Variables in HTML](https://devpractical.com/how-to-use-javascript-variable-in-html/) - After importing the data to JS, this instruction helped me to show the data in HTML.


## Author

- Website - [Kevin Powell](https://t.co/BJIftdUnMN)
- Twitter - [@KevinJPowell](https://www.twitter.com/KevinJPowell)

