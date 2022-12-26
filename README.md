# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./assets/screenshot)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://create-react-app.dev/) - JS-Library
- [Create React App Framework](https://create-react-app.dev/) - React Framework
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Hooks and Custom Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - REST Api


### What I learned

 I was made this app for practicing hooks an custom hooks implementation, and for improving Atomic Design implementation on a React based project.
I feel very confortable writing SASS code for styling, nested classes make coding more readable. like code below, where ```.actionButton``` is the class, but inside it has nested selector about the same class
To see how you can add code snippets, see below:


```scss
.actionButton {
  background-color: colors.$color-primary-02;
  border-radius: 50%;
  border-style: none;
  width: 64px;
  height: 64px;
  transition: box-shadow 0.3s, background-color 0.2s;
  > div {
    height: 24px;
  }
  &:hover {
    box-shadow: 0 0 30px colors.$color-primary-02;
  }
  &:active {
    background-color: colors.$color-primary-01;
    img {
      animation-name: diceTumble;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-timing-function: ease-out;
    }
  }
}
```

### Continued development

I wanna improve my skills on front end and move in the future to mobile app development.

### Useful resources

- [W3School](https://www.w3schools.com/) - The most important site for consulting information abot HTML, CSS and Javascript

- [MDN docs](https://developer.mozilla.org/en-US/) - For get all information about Javascript and html. 

- [CSS Tricks](https://css-tricks.com/) - The best site about CSS. 

-[Indicator Animation](https://medium.com/swlh/9-different-css-only-loading-indicator-animation-5d9f2c57a33a) - This article helpme to make loading indicator.

## Author

- Frontend Mentor - [@jglopezre](https://www.frontendmentor.io/profile/jglopezre)


## Acknowledgments

### **Practice, practice a lot. Practice is the best way to improve your code skills**.


