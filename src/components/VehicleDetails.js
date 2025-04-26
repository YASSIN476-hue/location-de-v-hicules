import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer l'id du véhicule depuis l'URL
import './styles.css'; // Importer le fichier CSS spécifique

// Simuler une liste de 54 véhicules
const vehiclesData = [
  {
    id: 1,
    name: "Mercedes S-Class",
    price: 450,
    image: "/images/mercedes-s-class.jpg",
    brand: "Mercedes",
    type: "SUV",
    transmission: "Automatique",
    fuel: "Diesel",
    description: "Berline de luxe, automatique, cuir",
    places: "5 places",
    similarVehicles: [
      {
        id: 2,
        name: "Renault Kadjar",
        price: 60,
        image: "/images/renault-kadjar.jpg",
      },
      {
        id: 3,
        name: "Volkswagen Tiguan",
        price: 70,
        image: "/images/volkswagen-tiguan.jpg",
      },
      {
        id: 4,
        name: "Citroën C5 Aircross",
        price: 65,
        image: "/images/citroen-c5-aircross.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Ferrari 488",
    price: 1200,
    image: "/images/ferrari-488.jpg",
    brand: "Ferrari",
    type: "Sportive",
    transmission: "Automatique",
    fuel: "Essence",
    description: "Supercar, automatique, performance",
    places: "2 places",
    similarVehicles: [
      {
        id: 5,
        name: "Lamborghini Huracán",
        price: 1500,
        image: "/images/lamborghini-huracan.jpg",
      },
      {
        id: 6,
        name: "Porsche 911",
        price: 1300,
        image: "/images/porsche-911.jpg",
      },
      {
        id: 7,
        name: "Aston Martin DB11",
        price: 1100,
        image: "/images/aston-martin-db11.jpg",
      },
    ],
  },
  // Ajoutez ici les autres véhicules jusqu'à 54
];

function VehicleDetails() {
  const { id } = useParams(); // Récupérer l'id du véhicule depuis l'URL
  const vehicle = vehiclesData.find((v) => v.id === parseInt(id)); // Trouver le véhicule correspondant

  if (!vehicle) {
    return <div>Véhicule non trouvé</div>;
  }

  return (
    <section id="vehicle-details">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={vehicle.image} alt={vehicle.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{vehicle.name}</h2>
            <p><strong>Catégorie :</strong> {vehicle.type}</p>
            <p><strong>Transmision :</strong> {vehicle.transmission}</p>
            <p><strong>Fuel :</strong> {vehicle.fuel}</p>
            <p><strong>Passagers :</strong> {vehicle.places}</p>
            <p><strong>Description :</strong> {vehicle.description}</p>
            <button className="btn btn-primary w-100">Réserver</button>
          </div>
        </div>

        {/* Véhicules similaires */}
        <div className="mt-5">
          <h3>Véhicules similaires</h3>
          <div className="row">
            {vehicle.similarVehicles.map(similarVehicle => (
              <div key={similarVehicle.id} className="col-md-4">
                <img src={similarVehicle.image} alt={similarVehicle.name} className="img-fluid" />
                <p>{similarVehicle.name}</p>
                <p>A partir de {similarVehicle.price}€/jour</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleDetails;