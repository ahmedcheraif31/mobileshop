import React, { useState, useEffect } from "react";
import axios from "axios";
import Mobile from "./Mobile.jsx";
import Add from "./Add.jsx";
import "./styles.css"; 

function App() {
  const [mobile, setmobile] = useState([]);
  const [re, setre] = useState(false);

  // Function to fetch data from server
  const fetch = () => {
    axios.get("http://localhost:3000/mobile").then((response) =>
      setmobile(response.data)
    );
  };

  // Use useEffect hook to fetch data when re changes
  useEffect(() => {
    fetch();
  }, [re]);

  return (
    <div>
      <h1> Welcome to your mobile shop </h1>
      <div className="container">
        <Add setre={setre} re={re} />
        <Mobile mobile={mobile} setre={setre} re={re} />
        
      </div>
    </div>
  );
  // Render the Mobile component and pass three props:
//  mobile: an array of mobile objects fetched from server
//  setre: a function to set the re state variable in App component
//  re: a boolean state variable  re-rendering  when changed.
}

export default App;
