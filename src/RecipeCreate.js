import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState })
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  }
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" required={true} value={formData.name}  onChange={handleChange}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" required={true} value={formData.cuisine}  onChange={handleChange}/>
            </td>
            <td>
              <input id="photo" name="photo" type="url" required={true} value={formData.photo}  onChange={handleChange}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" required={true} value={formData.ingredients} onChange={handleChange}/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" required={true} value={formData.preparation} onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
