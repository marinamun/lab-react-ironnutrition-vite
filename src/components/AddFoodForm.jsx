import { useState } from "react";

// Your code here
function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addFunction(name, image, calories, servings);

    setName(""); //to empty the boxes after submit
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Image:</label>
        <input
          name="image"
          type="text"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <label>Calories:</label>
        <input
          name="calories"
          type="number"
          value={calories}
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />

        <label>Servings:</label>
        <input
          name="servings"
          type="number"
          value={servings}
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default AddFoodForm;
