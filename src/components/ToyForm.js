import React,{useState} from "react";

function ToyForm({addNewToy}) {
  const [name,setName]=useState("")
  const [image,setImage]=useState("")
 function handleSubmit(){
const obj={name:name,
image:image,
likes:0}
addNewToy(obj)
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
