import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";


function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
