import React from "react";
import classes from "../meals/meals-grid.module.css";
import MealsItem from "./meals-item";
function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meals) => (
        <li key={meals.id}>
          <MealsItem {...meals} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
