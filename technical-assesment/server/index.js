const express = require("express");
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())
const PORT = 4000;
const mysql = require("mysql2");
const cors=require("cors")
app.use(cors())

app.use(express.static("public"));

app.use(express.json());

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "recepies",
  
})

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db conected !!");
  }
});

app.post("/api/recepies",(req,res)=>{
  const post =  req.body;
  console.log("creating recepie", post) 
  db.query(`INSERT INTO recepie 
  (recepie_Name,Cook_Time,Prep_Time,recepie_Description,recepie_Ingredients) 
  VALUES (?,?,?,?,?)`,
  [post.name,post.cook_time,post.prep_time,post.description,post.Ingredients],
  (error,  results) => {
      if (error) console.log(error)
     res.json(results)
    });
})

app.get("/api/recepies",(req,res)=>{
  db.query("SELECT * FROM recepie",(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
  })
})


app.delete('/api/recepies/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM recepies WHERE recepie_Id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting recepie');
    } else {
      res.send('recepie deleted successfully');
    }
  });
});


  

// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
