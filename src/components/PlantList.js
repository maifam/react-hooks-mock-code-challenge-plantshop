import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant}) {

  const plantToDisplay = plants.map(plant => {
    return <PlantCard key={plant.id} plantObj={plant} deletePlant={onDeletePlant}/>
  })

 
  return (
    <ul className="cards">{plantToDisplay}</ul>
  );
}

export default PlantList;

// name={plant.name} image={plant.image} price={plant.price}