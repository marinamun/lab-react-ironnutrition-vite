import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
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
          }}
          
        />
      ))}
    </div>
  );
}

export default App;
