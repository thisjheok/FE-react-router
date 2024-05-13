import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const [brand,setBrand] = useState('');
  return (
    <>
        <h1>Menu Page</h1>
        <input type="text" onChange={(e)=>setBrand(e.target.value)}></input>
        <button onClick={()=>navigate(`/product/${brand}`)}>브랜드 페이지로 이동</button>
    </>
  );
}

export default Menu;