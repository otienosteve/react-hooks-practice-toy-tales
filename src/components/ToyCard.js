import React from "react";

function ToyCard({id,name,image,likes,deleteToy,increaseLike}) {

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={()=>increaseLike(id,likes)}>Like {likes}</button>
      <button className="del-btn" onClick={(e)=>deleteToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
