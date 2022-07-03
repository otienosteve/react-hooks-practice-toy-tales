import React, { useState,useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
const API_URL='http://localhost:3001/toys';
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys]=useState([])
  const loadToys=()=>{
    fetch(API_URL).then(res=>res.json())
    .then(data=>setToys(data))
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  useEffect(()=>{
   loadToys()
  },[])
  const deleteToy=(id)=>{
    fetch(API_URL+'/'+id,{method:"DELETE"})
    loadToys()
  }
  const addNewToy=(data)=>{
    fetch(API_URL,
      {method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)})
    .then(res=>res.json()).then(data=>console.log(data))
  }
  const increaseLike= (id,likes)=>{
    fetch(API_URL+'/'+id,
      {method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({likes:likes+1})})
    .then(res=>res.json()).then(data=>console.log(data))
    loadToys()
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm  addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} increaseLike={increaseLike} />
    </>
  );
}

export default App;
