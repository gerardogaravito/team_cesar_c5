//DEPENDENCIAS
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducer';
import data from '../recipe.json';

import './global.css';
import App from './components/App';

//Esto corresponde a webpack y esta en este archicvo probicionalmente.
const initialState = {
    user: {},
    cart:[],
    favoritos: {},
    recipes: [
            {
                "id": 1,
                "name": "Turkey Bacon Guacamole Cucumber Sub",
                "picture": "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    { "id": 10, "name": "cucumbers", "cant": 4, "und": "kg", "price": 5 },
                    {
                        "id": 11,
                        "name": "cup guacamole",
                        "cant": 235,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 12,
                        "name": "slices turkey",
                        "cant": 4,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 13, "name": "slices bacon", "cant": 8, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Use a vegetable peeler to peel the cucumbers.",
                    "On a cutting board, cut off the ends and cut the cucumbers in half. Scoop out the seeds and discard.",
                    "Spread guacamole on both sides of the prepared cucumber.",
                    "Layer the turkey on one half of the cucumber and bacon on the other half, and close the sandwich.",
                    "Enjoy!"
                ],
                "preparationTime": 30,
                "portions": 6,
                "dificult": "Easy"
            },
    
            {
                "id": 2,
                "name": "Bacon Syrup For Cocktails",
                "picture": "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    { "id": 14, "name": "cup sugar", "cant": 1, "und": "kg", "price": 5 },
                    { "id": 15, "name": "cup water", "cant": 1, "und": "kg", "price": 5 },
                    {
                        "id": 16,
                        "name": "strips bacon, cooked",
                        "cant": 3,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Combine sugar and water in a medium saucepan. Stir sugar and water over low heat until sugar dissolves.",
                    "Increase heat to bring water to a boil and add pre-cooked bacon, stirring thoroughly. Reduce heat and let simmer for three minutes.",
                    "Remove from heat and remove bacon pieces. Pour syrup through a mesh strainer into a bowl to filter out grease and any remaining bacon pieces. You can store the syrup in a bowl or funnel into a bottle. Store in the refrigerator.",
                    "(Note: Small grease deposits may solidify at the top of the bottle after refrigeration. You can leave it as is or fish them out.)",
                    "Enjoy!"
                ],
                "preparationTime": 30,
                "portions": 6,
                "dificult": "Easy"
            },
    
            {
                "id": 3,
                "name": "Jalapeño Poppers",
                "picture": "https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    { "id": 17, "name": "jalapeñoes", "cant": 4, "und": "kg", "price": 5 },
                    {
                        "id": 13,
                        "name": "slices bacon",
                        "cant": 8,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 18,
                        "name": "oz cream cheese (225 g), softened",
                        "cant": 8,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Combine sugar and water in a medium saucepan. Stir sugar and water over low heat until sugar dissolves.",
                    "Increase heat to bring water to a boil and add pre-cooked bacon, stirring thoroughly. Reduce heat and let simmer for three minutes.",
                    "Remove from heat and remove bacon pieces. Pour syrup through a mesh strainer into a bowl to filter out grease and any remaining bacon pieces. You can store the syrup in a bowl or funnel into a bottle. Store in the refrigerator.",
                    "(Note: Small grease deposits may solidify at the top of the bottle after refrigeration. You can leave it as is or fish them out.)",
                    "Enjoy!"
                ],
                "preparationTime": 30,
                "portions": 8,
                "dificult": "Easy"
            },
    
            {
                "id": 4,
                "name": "BBQ Bacon Onion Rings",
                "picture": "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    { "id": 19, "name": "onions", "cant": 2, "und": "kg", "price": 5 },
                    {
                        "id": 13,
                        "name": "slices bacon",
                        "cant": 20,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 20,
                        "name": "cup BBQ sauce",
                        "cant": 145,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 21, "name": "cup honey", "cant": 85, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Preheat oven to 400˚F (200˚C).",
                    "Peel and cut onions into ½-inch (1 cm) rings. Separate the rings.",
                    "Wrap a piece of bacon around one onion ring. Repeat with remaining onion rings and place on a parchment paper-lined baking sheet.",
                    "Combine the BBQ sauce and honey in a bowl, and brush onto rings.",
                    "Bake for 20 minutes, or until golden brown.",
                    "Enjoy!"
                ],
                "preparationTime": 30,
                "portions": 12,
                "dificult": "Medium"
            },
    
            {
                "id": 5,
                "name": "Bacon-Wrapped Mozzarella Sticks",
                "picture": "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    { "id": 17, "name": "bacon", "cant": 4, "und": "kg", "price": 5 },
                    {
                        "id": 24,
                        "name": "string cheese",
                        "cant": 4,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 25, "name": "frozen oil", "cant": 4, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Freeze the string cheese (for at least a few hours)",
                    "Once frozen, place the string cheese on top of a slice of bacon, and fold the edges over to cover the cheese.",
                    "Once folded wrap/roll the cheese in a second slice of bacon. Make sure to use toothpicks for support.",
                    "Pour oil into a pan and heat to 350°F (177°C), then place your Bacon Mozzarella stick into it.",
                    "Fry until the bacon appears to be cooked in it’s golden brown state then let dry on a paper towel.",
                    "Once dried, serve with a dipping sauce of your choice!",
                    "Enjoy!"
                ],
                "preparationTime": 20,
                "portions": 4,
                "dificult": "Hard"
            },
    
            {
                "id": 6,
                "name": "Bacon-wrapped Brussels Sprouts",
                "picture": "https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Bacon",
                "ingredients": [
                    {
                        "id": 16,
                        "name": "strips bacon, cooked",
                        "cant": 12,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 22,
                        "name": "brussels sprouts maple syrup",
                        "cant": 12,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 23,
                        "name": "black pepper, to taste",
                        "cant": 100,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Lay out stips of bacon on a clean cutting board or other clean flat surface.",
                    "Lightly brush each strip of bacon with maple syrup making sure to coat the entire surface of the meat. Lightly sprinkle with black pepper.",
                    "Take a brussels sprouts and starting from the bottom, roll up each piece of bacon so that it evenly wraps the vegetable.",
                    "Lightly brush the tops of each wrapped brussels sprout with more maple syrup and sprinkle on additional pepper. Transfer the pieces to a baking sheet making sure to place each piece of rolled-up bacon with the seam side down.",
                    "Bake at 350˚F (180˚C) for 20-25 minutes or until bacon is done and thoroughly cooked.",
                    "Remove from baking tray and place on paper towels to remove excess bacon fat.",
                    "Enjoy!"
                ],
                "preparationTime": 35,
                "portions": 4,
                "dificult": "Medium"
            },
    
            {
                "id": 7,
                "name": "Sour Apple Concoction",
                "picture": "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 24,
                        "name": "cups ice (300 g), divided",
                        "cant": 2,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 25,
                        "name": "sour apple liqueur",
                        "cant": 4,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 26,
                        "name": "apple flavored vodka",
                        "cant": 3,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 27, "name": "lemon juice", "cant": 1, "und": "kg", "price": 5 },
                    {
                        "id": 28,
                        "name": "green apple gatorade",
                        "cant": 2,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 29,
                        "name": "sour apple rings",
                        "cant": 2,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Add 1 cup (150 g) ice to a cocktail shaker. Pour in the sour apple liqueur, apple vodka, green apple sports drink and lemon juice. Shake well.",
                    "Add ½ cup (75 g) of ice to each of 2 serving glasses. Pour the cocktail over the ice.",
                    "Insert a straw into each glass and garnish with sour apple rings.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 2,
                "dificult": "Easy"
            },
    
            {
                "id": 8,
                "name": "Apple Peel Chips",
                "picture": "https://images.pexels.com/photos/3490368/pexels-photo-3490368.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 30,
                        "name": "large apples",
                        "cant": 8,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 31,
                        "name": "tablespoons sugar",
                        "cant": 3,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 32,
                        "name": "teaspoon cinnamon",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Preheat the oven to 300°F (150°C).",
                    "Place the apple peels on a baking sheet lined with parchment paper.",
                    "Mix the sugar and cinnamon in a small bowl and sprinkle it over the peels.",
                    "Toss the peels with your hands until evenly coated with the sugar mixture.",
                    "Bake for about 30 minutes, tossing the peels halfway through with a pair of tongs.",
                    "Let cool before eating.",
                    "Enjoy!"
                ],
                "preparationTime": 20,
                "portions": 4,
                "dificult": "Hard"
            },
    
            {
                "id": 9,
                "name": "Baked Cinnamon Apple Chips",
                "picture": "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 33,
                        "name": "golden delicious apple, thinly sliced",
                        "cant": 1
                    },
                    {
                        "id": 34,
                        "name": "teaspoon ground cinnamon",
                        "cant": 250,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 35, "name": "pinch salt", "cant": 1, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Preheat oven to 250˚F (120˚C).",
                    "Place apple slices on a parchment paper-lined baking sheet and sprinkle with cinnamon and salt.",
                    "Bake for 40 minutes, until the apples are slightly browned.",
                    "Cool completely before serving.",
                    "Enjoy!"
                ],
                "preparationTime": 10,
                "portions": 1,
                "dificult": "Easy"
            },
    
            {
                "id": 10,
                "name": "Beer Batter Apple Rings",
                "picture": "https://images.pexels.com/photos/3754300/pexels-photo-3754300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 36,
                        "name": "cups flour",
                        "cant": 155,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 32,
                        "name": "teaspoon cinnamon",
                        "cant": 0.5,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 37,
                        "name": "redd's apple ale",
                        "cant": 355,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 38, "name": "red apples", "cant": 3, "und": "kg", "price": 5 },
                    {
                        "id": 39,
                        "name": "cup powdered sugar",
                        "cant": 40,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 25, "name": "frozen oil", "cant": 4, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Heat oil in a large pot so it’s at least 4 inches (10 cm) deep. If you have a thermometer, be sure the oil reaches at least 360ºF (185ºC) for frying.",
                    "In a bowl, whisk together flour, cinnamon, and Redd’s Apple Ale until smooth.",
                    "Slice off the top and bottom of the apples, and slice each apple into ½-inch (1 cm) thick rounds.",
                    "With a teaspoon or large piping tip, cut out a circle in the center of the apple ring to make it look like a donut.",
                    "With a paper towel, pat down the apple slices.",
                    "Dip the apple slices in the batter.",
                    "Fry them two to three at a time. Flip each apple slice once during frying and fry until both sides are golden brown.",
                    "Carefully remove from the oil and place onto paper towels or a drying rack.",
                    "Cool, then sprinkle with powdered sugar.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 12,
                "dificult": "Easy"
            },
    
            {
                "id": 11,
                "name": "Carrot-mango Tango Baby Food",
                "picture": "https://images.pexels.com/photos/3737639/pexels-photo-3737639.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 30,
                        "name": "large apples",
                        "cant": 2,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 40,
                        "name": "large carrots",
                        "cant": 3,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 41, "name": "mango", "cant": 1, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Add apples, carrots, mango, and water, breast milk, or formula to a blender or food processor. Blend very well.",
                    "Add more liquid as needed.",
                    "Refrigerate up to 3 days or freeze up to 1 month.",
                    "NOTE: Check with your pediatrician before introducing new foods to children under 12 months.",
                    "Enjoy!"
                ],
                "preparationTime": 25,
                "portions": 8,
                "dificult": "Hard"
            },
    
            {
                "id": 12,
                "name": "Apple Fruit Rollers",
                "picture": "https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Apple",
                "ingredients": [
                    {
                        "id": 42,
                        "name": "stalks celery",
                        "cant": 3,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 43, "name": "gala apple", "cant": 1, "und": "kg", "price": 5 },
                    { "id": 44, "name": "cups beet", "cant": 400, "und": "kg", "price": 5 },
                    {
                        "id": 45,
                        "name": "cups spinach",
                        "cant": 120,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Add the celery, apple, beets, and spinach to a blender, and blend until smooth.",
                    "Using a mesh strainer, strain the juice over a large liquid measuring cup to remove the pulp. Use a spoon to help stir the pulp and press out the liquid. Reserve the pulp to make pulp muffins.",
                    "Chill the juice for at least 30 minutes (and keep up to 3 days).",
                    "Enjoy!"
                ],
                "preparationTime": 35,
                "portions": 1,
                "dificult": "Easy"
            },
    
            {
                "id": 13,
                "name": "Avocado Rose Avocado Toast",
                "picture": "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Avocado",
                "ingredients": [
                    {
                        "id": 46,
                        "name": "bread, toasted",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 47, "name": "avocado", "cant": 0.5, "und": "kg", "price": 5 },
                    { "id": 48, "name": "strawberry", "cant": 1, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Thinly slice half of an avocado. Keep slices together and start molding them into a line.",
                    "Start folding one end inside and wrapping other end around in a circle.",
                    "Place rose-shaped avocado on toast and add sliced strawberries at each corner of the toast.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 1,
                "dificult": "Easy"
            },
    
            {
                "id": 14,
                "name": "Avocado And Roasted Chickpea Toast",
                "picture": "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Avocado",
                "ingredients": [
                    {
                        "id": 46,
                        "name": "bread, toasted",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 47, "name": "avocado", "cant": 0.5, "und": "kg", "price": 5 },
                    {
                        "id": 49,
                        "name": "cup chickpeas",
                        "cant": 100,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 50, "name": "hot sauce", "cant": 0.5, "und": "kg", "price": 5 }
                ],
                "instructions": [
                    "Spread mashed avocado over toast, and top with roasted chickpeas and a dash of hot sauce.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 1,
                "dificult": "Easy"
            },
    
            {
                "id": 15,
                "name": "Caprese Avocado Toast",
                "picture": "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Avocado",
                "ingredients": [
                    {
                        "id": 46,
                        "name": "bread, toasted",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 47, "name": "avocado", "cant": 0.5, "und": "kg", "price": 5 },
                    {
                        "id": 51,
                        "name": "heirloom tomatoes",
                        "cant": 2,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 52,
                        "name": "mozzarella ball",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 53,
                        "name": "handful fresh basil, chopped",
                        "cant": 1,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Mash half of an avocado. Add salt and pepper, to taste. Mix until well combined.",
                    "Spread the mashed avocado evenly across toast, and top with heirloom tomatoes, mozzarella, and chopped basil.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 2,
                "dificult": "Easy"
            },
    
            {
                "id": 16,
                "name": "Creamy Cilantro Lime Dressing",
                "picture": "https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                "category": "Avocado",
                "ingredients": [
                    {
                        "id": 54,
                        "name": "cup fresh cilantro",
                        "cant": 10,
                        "und": "kg",
                        "price": 5
                    },
                    {
                        "id": 55,
                        "name": "coconut milk",
                        "cant": 120,
                        "und": "kg",
                        "price": 5
                    },
                    { "id": 56, "name": "lime juice", "cant": 60, "und": "kg", "price": 5 },
                    {
                        "id": 57,
                        "name": "cup avocado oil",
                        "cant": 240,
                        "und": "kg",
                        "price": 5
                    }
                ],
                "instructions": [
                    "Add cilantro, salt, pepper, coconut milk, lime juice and avocado oil into a mason jar and secure lid tightly.",
                    "Shake vigorously until ingredients are mixed thoroughly.",
                    "Store dressing in the fridge and use within 1-2 weeks. You may need to shake up the ingredients again before each use.",
                    "Enjoy!"
                ],
                "preparationTime": 15,
                "portions": 16,
                "dificult": "Medium"
            }
        ]
    };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer()
);

const container = document.getElementById('app');


 ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,container)
