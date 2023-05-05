import React from "react";
import axios from "axios";
import Updatemobile from "./Updatemobile.jsx"

var Mobile = (props) => {


// Function to delete a mobile from server using its ID

  const del = (id) => {
    axios.delete(`http://localhost:3000/mobile/${id}`)
      .then((res) => {
        props.setre()
        console.log("oh you deleted me ")
      })
      .catch(err => {
        console.log(err) 
      })
      props.setre(!props.re)
  }
 
  

  return (
    <div className="add">
      {props.mobile.map
      ((e, i) => {
        return (
          <div key={i}>
            <div className="mobileele"> name: {e.name}</div>
            <div className="mobileele"> price: {e.price}</div>
            <img src={e.img} alt="img" width="100" height="80" />
            <div className="mobileele"> nbrs: {e.quantite}</div>
            <button onClick={() => del(e.idmobile)}>DELETE</button>
            
           <Updatemobile  e={e}  setre={props.setre} re={props.re}/>

          </div>
        )
      })
      
      }
    </div>
  )
}
export default Mobile;

