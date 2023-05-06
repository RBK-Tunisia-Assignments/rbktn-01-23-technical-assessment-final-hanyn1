import React from "react";
import data from "../src/data/data.json"
import "../index.scss";
import App from "../App";




const AllRecepies = (props) => {

  const [showRecepie,setShowRecepie]=useState(false)

  function fetchData() {
    axios.get("http://localhost:4000/api/recepies")
      .then((res) => { 
        setRecepie(res.data);
        setShowRecepie(!showRecepie);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(showRecepie);
  }


  return (
    

    <div>
      <h1>All Recepies</h1>
      <ul>
        {props.recepie.map((e) => {
          return (
            <li key={e.id}>
              <h2>{e.recepie_Name}</h2>
              <p>{e.recepie_Ingredients}</p>
              <p>{e.recepie_Description}</p>
              <img  src={e.recepie_Image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllRecepies;


  
