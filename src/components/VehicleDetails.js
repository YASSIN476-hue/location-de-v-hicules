import React from 'react';
import { useParams } from 'react-router-dom';

function VehicleDetails() {
  const { id } = useParams();
  const vehicle = {
    name: "Peugeot 3008",
    rating: 4.5,
    category: "SUV",
    transmission: "Automatique",
    fuel: "Diesel",
    features: ["Climatisation", "Bluetooth", "Siège chauffant"],
    price: "65€/jour",
    similarVehicles: [
      { name: "Renault Kadjar", price: "60€/jour" },
      { name: "Volkswagen Tiguan", price: "70€/jour" },
      { name: "Citroën C5 Aircross", price: "65€/jour" },
    ],
  };

  return (
    <section id="vehicle-details">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://source.unsplash.com/random/600x400/?car" className="d-block w-100" alt="..." />
                </div>
                {/* Ajoutez plus de diapositives ici */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>{vehicle.name}</h2>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star${i < Math.floor(vehicle.rating) ? '' : '-half-alt'}`}></i>
              ))}
              <span>({Math.round(vehicle.rating * 2)} avis)</span>
            </div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Catégorie</td>
                  <td>{vehicle.category}</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>{vehicle.transmission}</td>
                </tr>
                <tr>
                  <td>Carburant</td>
                  <td>{vehicle.fuel}</td>
                </tr>
              </tbody>
            </table>
            <h4>Caractéristiques</h4>
            <ul className="list-inline">
              {vehicle.features.map(feature => (
                <li key={feature} className="list-inline-item"><i className="fas fa-check"></i> {feature}</li>
              ))}
            </ul>
            <h3>{vehicle.price}</h3>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-secondary">En savoir plus</a>
              <a href="#" className="btn btn-primary">Réserver</a>
            </div>
          </div>
        </div>
        <h3>Véhicules similaires</h3>
        <div className="row">
          {vehicle.similarVehicles.map(similar => (
            <div key={similar.name} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="https://source.unsplash.com/random/300x200/?car" className="card-img-top" alt={similar.name} />
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