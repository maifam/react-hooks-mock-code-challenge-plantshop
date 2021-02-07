import React, {useState} from "react";

function PlantCard({plantObj, deletePlant}) {

  const [inStock, setInStock] = useState(true)

  function handleStockChange(){
    setInStock(inStock => !inStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: "DELETE"
    })
    deletePlant(plantObj.id)
  }

  return (
    <li className="card">
      <img src={plantObj.image} alt={plantObj.name} />
      <h4>{plantObj.name}</h4>
      <p>Price: {plantObj.price}</p>
      {inStock ? (
        <button onClick={handleStockChange} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Remove Plant</button>
    </li>
  );
}

export default PlantCard;
