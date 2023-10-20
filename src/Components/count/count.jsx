import React, { useEffect, useState } from "react";
import './count.css'

function Count() {
  const [compteur,setcompteur]=useState(0);

  const handleClick1 = () => {
    setcompteur(compteur + 1)
  }

  const handleClick2 = () => {
    setcompteur(compteur - 1)
  }
  useEffect(()=>{
    if(compteur >= 5 && compteur % 5 === 0){
      alert(`ton compteur est a ${compteur}`)
    }
  },[compteur])

  return (
    <div className="count-container">
      <div className="count">{compteur}</div>
      <button onClick={handleClick1}>plus</button>
      <button onClick={handleClick2}>moins</button>
    </div>
  );
}

export default Count;
