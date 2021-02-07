import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plantsArr => {
      setPlants(plantsArr)
    })
  }, [])

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleDeletePlant(id){
    const deletedPlant = plants.filter(plant => plant.id !== id)
    setPlants(deletedPlant)
  }
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={searchTerm} onChangeSearch={setSearchTerm}/>
      <PlantList plants={filteredPlants} onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
