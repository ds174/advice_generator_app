# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/screenshots_result/desktop_advice.png)

## My process

### Built with

- HTML
- CSS
- Vanilla JS
- Rest API

### What I learned

```js
function first() {
  if (data.slip.advice.length > 100) {
    var change = document.getElementById("advice");
    change.style.fontSize = "1.4rem";
    advice.innerText = '"' + data.slip.advice + '"';
  } else {
    advice.innerText = '"' + data.slip.advice + '"';
  }
}
first();
```

```html
<picture>
  <source
    media="(max-width: 377px)"
    srcset="/images/pattern-divider-mobile1.svg"
  />
  <source
    media="(min-width: 440px)"
    srcset="/images/pattern-divider-desktop.svg"
  />
  <img src="/images/pattern-divider-desktop.svg" alt="divider" class="img" />
</picture>
```

### Continued development

1. Responsive layout
2. JS functions
