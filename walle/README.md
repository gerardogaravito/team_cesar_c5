# Walle

Proyect Final Platzi Master

## Description

The application allows to plan and manage your meals and waste. It let you see a database of recipies and assign your favorites meals to an specific day in a calendar. You can export a shopping list of ingredients, based on the recipes assigned. Finally it help you to manage your waste to boost recycling.

### Collaborators

Paul: paulmontoya15@gmail.com
José: jd.garzon12@gmail.com

### How to work

This is a React app, so we are working thinking in components.

#### Components

This is the initial list of components:

1. ~~Com--User-info~~
2. ~~Com--Payment~~
3. ~~Com--Cart-section~~
4. ~~Com--Cart-head~~
5. ~~Com--Recipe-instructions~~
6. ~~Com--Recipe-ingredients~~
7. ~~Com--Recipe-metadata~~
8. ~~Com--Recipe-dasboard~~
9. ~~Com--Recipe-carrousel~~
10. ~~Com--Recomendations-carrousel~~
11. ~~Com--Instructions-list~~
12. ~~Com--Search-hero~~
13. ~~Com--Main-hero~~
14. ~~Com--Header-home~~
15. ~~Com--Header-landing~~
16. ~~Com--Login~~

This components are specified in figma https://www.figma.com/file/nPhHPUFx0Q0dJQSbKumqTY/Proyecto-grupal-Walee?node-id=0%3A1

#### Pages

This is the initial list of pages:

1. pag--Landing
2. pag--Home
3. pag--Recipe
4. pag--Cart
5. pag--User

#### Styles

The styles are set with Sass. Each component has his own Sass file and it's saved in the style folder in the respective component(component or page).

#### Syntaxis to create a component

```javascript
//------------------------------ import libraries
import React from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "./index.scss";

const Greeting = () => {
  return <h1>Hola Bienvenido a Wall-e.</h1>;
};

export default Greeting;
```

![](https://i.imgur.com/taHRsCB.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
