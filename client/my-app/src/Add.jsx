import axios from "axios";
import React, { useState } from "react";

 function Add(props) {
  
  // Define state variables using useState hook

const [name,setname]=useState("")
const [price,setprice]=useState("")
const [img,setimg]=useState("")
const[quantite,setquantite]=useState("")


const handleSubmit=()=>{
   // Make a post request to the server 

    axios.post('http://localhost:3000/mobile',{
        name:name,
        price:price,
        img:img,
        quantite:quantite}
       )
    props.setre(!props.re)

    
}
  return (
    <div  className="add" >
<input placeholder="name"  onChange={(e)=>setname(e.target.value)}/>
<input placeholder="price" onChange={(e)=>setprice(e.target.value)} />
<input placeholder="img" onChange={(e)=>setimg(e.target.value)} />
<input placeholder="quantite"  onChange={(e)=>setquantite(e.target.value)}/>

<button onClick={handleSubmit}> add </button>
</div>

  )
}
export default Add;