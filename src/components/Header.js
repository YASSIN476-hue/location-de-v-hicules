import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo.png" // Chemin vers le logo
            alt="Logo Car Rental"
            className="logo"
          />
        </Link>

        {/* Bouton pour afficher/masquer le menu sur mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenu principal du header */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Liens principaux alignés avec le logo */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">
                Véhicules
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Boutons "Se connecter" et "S'inscrire" à droite */}
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {/* Bouton "Se connecter" en bleu */}
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white" to="/login">
                Se connecter
              </Link>
            </li>
            {/* Bouton "S'inscrire" agrandi et noir */}
            <li className="nav-item">
              <Link
                className="nav-link btn btn-dark text-white signup-btn"
                to="/signup"
              >
                S'inscrire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;