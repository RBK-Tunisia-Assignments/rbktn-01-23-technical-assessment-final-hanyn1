import React from "react";
import { useState } from "react";
import App from "../App.jsx"
import "../App.css";

const Add = () => {
  const [name,setName]=useState('')
  const [Cook_Time,setCook_Time]=useState(0)
  const [Prep_Time,setPrep_Time]=useState('')
  const [recepie_Description,setrecepie_Description]=useState('')
  const[recepie_Ingredients,setrecepie_Ingredients]=useState('')
  const[Categorie,setCategorie]=useState('')
  const [Servers,setServers]=useState('')
  const [image,setimage]=useState('')
  const [recepie,setRecepie]=useState([])
  
  const display=()=>{
    console.log(name)
    var object={
      name:name,
        Cook_time:Cook_time,
        Prep_time: Prep_Time,
        recepie_description: recepie_description,
        recepie_ingredients: recepie_ingredients,
        categorie:categorie,
        servers:servers,
        image:image
    }
    console.log(obj)
  
    axios.post('http://localhost:4000/api/recepies', object)
    .then(()=>{
      setRecepie([...recepie,{
        name:name,
        Cook_time:Cook_time,
        Prep_time: Prep_Time,
        recepie_description: recepie_description,
        recepie_ingredients: recepie_ingredients,
        categorie:categorie,
        servers:servers,
        image:image
      }])
  
    })
  
  }
  



  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" />
      </div>
      <button className="create-recipe-btn">Create Recipe</button>
    </div>
  );
};
export default Add;
