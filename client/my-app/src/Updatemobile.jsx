import React, { useState } from "react";
import axios from "axios";

var Updatemobile = (props) => {

const [show,handleShow]=useState(false)

const [nameup,setnameup]=useState(props.e.name)
const [priceup,setpriceup]=useState(props.e.price)
const [imgup,setimgup]=useState(props.e.imgup)
const[quantiteup,setquantiteup]=useState(props.e.quantite)


const up=(id)=>{
    
    axios.put(`http://localhost:3000/mobile/${id}`,{
      name:nameup ,
      price:priceup ,
      img:imgup ,
      quantite:quantiteup ,}
     )
    .then((res) => {
        console.log(res)
      })
    .catch(err => {
        console.log(err)
      })
      props.setre(!props.re)
  }
  return (
    <div className="add">
        <button onClick={()=>handleShow(!show)} >Update</button>
        {show ? (<div>
        <input type="text" placeholder="name"  onChange={(e)=>setnameup(e.target.value)}/>
        <input type="number" placeholder="price" onChange={(e)=>setpriceup(e.target.value)} />
        <input type="text" placeholder="img" onChange={(e)=>setimgup(e.target.value)}/>

       <input type="number" placeholder="quantite" onChange={(e)=>setquantiteup(e.target.value)}/> 
       <button onClick={()=>up(props.e.idmobile)}>submit </button>
        </div>) : <div></div>
    }

    </div>


  )


}

export default Updatemobile;