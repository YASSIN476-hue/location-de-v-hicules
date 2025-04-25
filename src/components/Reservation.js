import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Ajouter l'importation de useParams
import './styles.css';


// Simuler une liste de véhicules
const vehiclesData = [
  {
    id: 1,
    name: "Mercedes Classe C",
    price: 89,
    image: "/images/mercedes-classe-c.png",
    description: "Location à partir de 89€/jour",
    details: "Berline de luxe avec intérieur en cuir, sièges chauffants, et système audio haut de gamme.",
  },
  {
    id: 2,
    name: "BMW Série 5",
    price: 994,
    image: "/images/bmw-serie-5.png",
    description: "Location à partir de 994€/jour",
    details: "SUV moderne avec technologies avancées et confort exceptionnel.",
  },
  {
    id: 3,
    name: "Audi Q5",
    price: 1099,
    image: "/images/audi-q5.png",
    description: "Location à partir de 1099€/jour",
    details: "SUV moderne avec technologies avancées et confort exceptionnel.",
  },
];

function Reservation() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const vehicle = vehiclesData.find((v) => v.id === parseInt(id)); // Trouver le véhicule correspondant

  if (!vehicle) {
    return <div>Le véhicule demandé n'existe pas.</div>;
  }

  return (
    <section id="reservation">
      <h2>Réservation pour : {vehicle.name}</h2>

      {/* Détails du véhicule */}
      <div className="section vehicle-details">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
        <div>
          <p>{vehicle.description}</p>
          <p>{vehicle.details}</p>
          <p>Prix : {vehicle.price}€/jour</p>
        </div>
      </div>

      {/* Récapitulatif */}
      <div className="section summary">
        <h3>Récapitulatif</h3>
        <p><strong>Tarif journalier :</strong> {vehicle.price}€/jour</p>
        <p><strong>Durée :</strong> 3 jours</p>
        <p><strong>Total :</strong> {vehicle.price * 3}€</p>
        <ul>
          <li>Annulation gratuite jusqu'à 48h avant la prise en charge</li>
          <li>Assistance 24/7</li>
          <li>Kilométrage illimité</li>
        </ul>
      </div>

      {/* Options supplémentaires */}
      <div className="section options">
        <h3>Options supplémentaires</h3>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="gps-premium" />
          <label className="form-check-label" htmlFor="gps-premium">
            GPS Premium <span className="price">10€/jour</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="assurance-tous-risques" />
          <label className="form-check-label" htmlFor="assurance-tous-risques">
            Assurance tous risques <span className="price">25€/jour</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="siege-enfant" />
          <label className="form-check-label" htmlFor="siege-enfant">
            Siège enfant <span className="price">15€/jour</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="chauffeur" />
          <label className="form-check-label" htmlFor="chauffeur">
            Chauffeur <span className="price">150€/jour</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="hotspot-wifi" />
          <label className="form-check-label" htmlFor="hotspot-wifi">
            Hotspot WiFi <span className="price">8€/jour</span>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="pneus-hiver" />
          <label className="form-check-label" htmlFor="pneus-hiver">
            Pneus hiver <span className="price">20€/jour</span>
          </label>
        </div>
        <label htmlFor="special-requests">Demandes spéciales</label>
        <textarea id="special-requests" className="form-control"></textarea>
      </div>

      {/* Informations personnelles */}
      <div className="section personal-info">
        <h3>Informations personnelles</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" className="form-control" placeholder="Votre prénom" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Votre email" />
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" className="form-control" placeholder="Votre adresse" />
            <label htmlFor="postal-code">Code postal</label>
            <input type="text" id="postal-code" className="form-control" placeholder="Votre code postal" />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" className="form-control" placeholder="Votre nom" />
            <label htmlFor="phone">Téléphone</label>
            <input type="tel" id="phone" className="form-control" placeholder="Votre numéro de téléphone" />
            <label htmlFor="city">Ville</label>
            <input type="text" id="city" className="form-control" placeholder="Votre ville" />
            <label htmlFor="driver-license">Numéro de permis de conduire</label>
            <input type="text" id="driver-license" className="form-control" placeholder="Votre numéro de permis" />
          </div>
        </div>
      </div>

      {/* Paiement */}
      <div className="section payment">
        <h3>Paiement</h3>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment-method" id="bank-card" checked />
          <label className="form-check-label" htmlFor="bank-card">
            Carte bancaire
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment-method" id="paypal" />
          <label className="form-check-label" htmlFor="paypal">
            PayPal
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment-method" id="agency-payment" />
          <label className="form-check-label" htmlFor="agency-payment">
            Paiement à l'agence
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="card-number">Numéro de carte</label>
          <input type="text" id="card-number" className="form-control" placeholder="1234 5678 9012 3456" />
          <label htmlFor="expiration-date">Date d'expiration</label>
          <input type="text" id="expiration-date" className="form-control" placeholder="MM/AA" />
          <label htmlFor="cvc">CVC</label>
          <input type="text" id="cvc" className="form-control" placeholder="123" />
        </div>
        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" id="terms-and-conditions" />
          <label className="form-check-label" htmlFor="terms-and-conditions">
            J'accepte les conditions générales de location et la politique de confidentialité
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Confirmer la réservation</button>
      </div>
    </section>
  );
}

export default Reservation;