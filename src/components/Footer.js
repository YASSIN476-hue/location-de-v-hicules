import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white p-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne pour le logo */}
          <div className="col-md-3">
            <img
              src="/images/logo.png" // Chemin vers votre logo local
              alt="Logo Elite Auto Location"
              className="mb-2 footer-logo"
            />
            <p>L'excellence automobile à votre service depuis 2010</p>
          </div>
          <div className="col-md-3">
            <h5>Nos Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Location courte durée</a></li>
              <li><a href="#" className="text-white">Location longue durée</a></li>
              <li><a href="#" className="text-white">Conciergerie</a></li>
              <li><a href="#" className="text-white">Service VIP</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Informations</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">À propos</a></li>
              <li><a href="#" className="text-white">Conditions générales</a></li>
              <li><a href="#" className="text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-white">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-phone"></i> +212 660 803 443</li>
              <li><i className="fas fa-phone"></i> +212 767 440 130</li>
              <li><i className="fas fa-envelope"></i> younessdidi@gmail.com</li>
              <li><i className="fas fa-envelope"></i> qassiyassine@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> N°1 Lot De La Province, ERRACHIDIA</li>
              <li><i className="fas fa-map-marker-alt"></i> N°30 MOHIT, ERRACHIDIA</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2025 Elite Auto Location. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;