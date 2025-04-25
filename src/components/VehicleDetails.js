import React from 'react';
import { useParams } from 'react-router-dom';

// Simuler une liste de 54 véhicules
const vehiclesData = [
  {
    id: 1,
    name: "Mercedes Classe C",
    price: 89,
    image: "/images/mercedes-classe-c.png",
    description: "Location à partir de 89€/jour",
    details: "Véhicule luxueux avec intérieur en cuir, sièges chauffants, et système audio haut de gamme.",
    similarVehicles: [
      { id: 2, name: "BMW Série 5", price: "994€/jour" },
      { id: 3, name: "Audi Q5", price: "1099€/jour" },
    ],
  },
  {
    id: 2,
    name: "BMW Série 5",
    price: 994,
    image: "/images/bmw-serie-5.png",
    description: "Location à partir de 994€/jour",
    details: "Berline de luxe avec moteur puissant et design élégant.",
    similarVehicles: [
      { id: 1, name: "Mercedes Classe C", price: "89€/jour" },
      { id: 3, name: "Audi Q5", price: "1099€/jour" },
    ],
  },
  {
    id: 3,
    name: "Audi Q5",
    price: 1099,
    image: "/images/audi-q5.png",
    description: "Location à partir de 1099€/jour",
    details: "SUV moderne avec technologies avancées et confort exceptionnel.",
    similarVehicles: [
      { id: 1, name: "Mercedes Classe C", price: "89€/jour" },
      { id: 2, name: "BMW Série 5", price: "994€/jour" },
    ],
  },
];

function VehicleDetails() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const vehicle = vehiclesData.find((v) => v.id === parseInt(id)); // Trouver le véhicule correspondant

  if (!vehicle) {
    return <div>Le véhicule demandé n'existe pas.</div>;
  }

  return (
    <section id="vehicle-details">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={vehicle.image} className="img-fluid" alt={vehicle.name} />
          </div>
          <div className="col-md-6">
            <h2>{vehicle.name}</h2>
            <p>{vehicle.description}</p>
            <p>{vehicle.details}</p>
            <h3>{vehicle.price}/jour</h3>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary">En savoir plus</button>
              <button className="btn btn-primary">Réserver</button>
            </div>
          </div>
        </div>
        <h3>Véhicules similaires</h3>
        <div className="row">
          {vehicle.similarVehicles.map((similar) => (
            <div key={similar.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={vehiclesData.find((v) => v.id === similar.id).image} className="card-img-top" alt={similar.name} />
                <div className="card-body">
                  <h5 className="card-title">{similar.name}</h5>
                  <p className="card-text">À partir de {similar.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleDetails;