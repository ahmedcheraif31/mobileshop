const express = require('express');
var cors = require('cors')
const mysql=require("mysql2")


const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mobileshop'
  });
  
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MySQL!')
    }
  });
  app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get("/mobile",(req,res)=>
{
    connection.query("SELECT * FROM mobile ",
    function(err, results) {
      res.json(results) })

})

app.post("/mobile",(req,res)=>{
    const post =  req.body; 
    connection.query("INSERT INTO mobile (name,price,quantite,img) VALUES (?,?,?,?)",[post.name,post.price,post.quantite,post.img],
    (error,  results) => {
       res.json(results)
      });
    })
    app.delete("/mobile/:idmobile", (req, res) => {
        const id = req.params.idmobile;
        connection.query(
          "DELETE FROM mobile WHERE idmobile = ?",
          [id],
          function(err, results) {
            if (err) {
              console.log(err);
            }
            res.json(results);
          }
        );
      });
      app.put("/mobile/:idmobile", (req, res) => {
        const id = req.params.idmobile;
        const post = req.body;
        connection.query(
          "UPDATE mobile SET name =?,price =?,quantite =?,img =? WHERE idmobile =?",
          [post.name, post.price, post.quantite, post.img, id],
          function(err, results) {  
            if (err) {
              console.log(err);
            }
            res.json(results);
        })})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});