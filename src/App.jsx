import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const newFoods = foods.filter((currentFood) => {
      return currentFood.id !== id; ///we want to return true for foods to keep in the page
    });
    setFoods(newFoods);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => (
        <FoodBox
          food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
            id: food.id,
          }}
          deleteFunction={deleteFood}
          key={food.id}
        />
      ))}
    </div>
  );
}

export default App;
