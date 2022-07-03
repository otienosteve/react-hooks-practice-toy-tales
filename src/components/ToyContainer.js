import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,deleteToy, increaseLike}) {
  return (
    <div id="toy-collection">{
      toys.map(toy=><ToyCard key={toy.id} {...toy} deleteToy={deleteToy}  increaseLike={increaseLike} />)
    }</div>
  );
}

export default ToyContainer;
