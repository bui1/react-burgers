import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // transform the props ingredients object to an array
    // array of ingredients
    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])] // [element,lement]
            .map((_, index) => {
                return <BurgerIngredient key={key + index} type={key}/>
            });
        });

    return (
        <div className= {classes.Burger}> 
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    ); 
};

export default burger;