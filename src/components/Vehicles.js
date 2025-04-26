import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL
import './styles.css'; // Importer le fichier CSS

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
    places: "5 places"
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
    places: "2 places"
  },
  // Ajoutez ici les autres véhicules jusqu'à 54
];

function Vehicles() {
  const location = useLocation(); // Récupérer les paramètres de l'URL
  const queryParams = new URLSearchParams(location.search);
  const categoryFilterFromURL = queryParams.get('category'); // Récupérer la catégorie depuis l'URL
  const [vehicles, setVehicles] = useState(vehiclesData);
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVehicles.slice(indexOfFirstItem, indexOfLastItem);

  // Filtres
  const [priceFilter, setPriceFilter] = useState("croissant");
  const [brandFilter, setBrandFilter] = useState("Toutes les marques");
  const [typeFilter, setTypeFilter] = useState("Tous les types");
  const [transmissionFilter, setTransmissionFilter] = useState("Toutes");
  const [minPrice, setMinPrice] = useState(""); // Prix minimum
  const [maxPrice, setMaxPrice] = useState(""); // Prix maximum

  useEffect(() => {
    applyFilters();
  }, [categoryFilterFromURL]); // Appliquer le filtre lorsque la catégorie change

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    applyFilters();
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
    applyFilters();
  };

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
    applyFilters();
  };

  const handleTransmissionFilterChange = (e) => {
    setTransmissionFilter(e.target.value);
    applyFilters();
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    applyFilters();
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = [...vehicles];

    // Filtrer par catégorie si elle est présente dans l'URL
    if (categoryFilterFromURL) {
      filtered = filtered.filter(vehicle => vehicle.type === categoryFilterFromURL);
    }

    // Filtrer par prix
    if (priceFilter === "croissant") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "décroissant") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "alphabetique") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (priceFilter === "reverse-alphabetique") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Filtrer par marque
    if (brandFilter !== "Toutes les marques") {
      filtered = filtered.filter(vehicle => vehicle.brand === brandFilter);
    }

    // Filtrer par type
    if (typeFilter !== "Tous les types") {
      filtered = filtered.filter(vehicle => vehicle.type === typeFilter);
    }

    // Filtrer par transmission
    if (transmissionFilter !== "Toutes") {
      filtered = filtered.filter(vehicle => vehicle.transmission === transmissionFilter);
    }

    // Filtrer par intervalle de prix
    if (minPrice && maxPrice) {
      filtered = filtered.filter(vehicle => vehicle.price >= parseInt(minPrice) && vehicle.price <= parseInt(maxPrice));
    } else if (minPrice) {
      filtered = filtered.filter(vehicle => vehicle.price >= parseInt(minPrice));
    } else if (maxPrice) {
      filtered = filtered.filter(vehicle => vehicle.price <= parseInt(maxPrice));
    }

    setFilteredVehicles(filtered);
    setCurrentPage(1); // Réinitialiser la page après chaque filtre
  };

  // Pagination
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const renderPageNumbers = () => {
    const range = [];
    const currentPageIndex = currentPage - 1;
    const maxVisibleButtons = 5; // Nombre maximal de boutons de pagination visibles
    for (let i = Math.max(0, currentPageIndex - 1); i <= Math.min(totalPages - 1, currentPageIndex + maxVisibleButtons - 2); i++) {
      range.push(i);
    }
    return range.map(number => (
      <button
        key={number}
        className={`page-item ${number + 1 === currentPage ? 'active' : ''}`}
        onClick={() => setCurrentPage(number + 1)}
      >
        {number + 1}
      </button>
    ));
  };

  return (
    <section id="vehicles">
      <div className="container mt-5">
        <h2 className="text-center text-primary">Nos Véhicules Disponibles</h2>
        {/* Barre de filtres */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-2">
            <select className="form-control filter-select" value={priceFilter} onChange={handlePriceFilterChange}>
              <option value="croissant">Trier par prix</option>
              <option value="décroissant">Prix: décroissant</option>
              <option value="alphabetique">Ordre alphabétique (A-Z)</option>
              <option value="reverse-alphabetique">Ordre alphabétique (Z-A)</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-control filter-select" value={brandFilter} onChange={handleBrandFilterChange}>
              <option value="Toutes les marques">Marque</option>
              {/* Ajouter les marques disponibles */}
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Tesla">Tesla</option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan">Nissan</option>
              <option value="Renault">Renault</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Citroën">Citroën</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Porsche">Porsche</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-control filter-select" value={typeFilter} onChange={handleTypeFilterChange}>
              <option value="Tous les types">Type de véhicule</option>
              {/* Ajouter les types disponibles */}
              <option value="SUV">SUV</option>
              <option value="Berline">Berline</option>
              <option value="Sportive">Sportive</option>
              <option value="Utilitaire">Utilitaire</option>
              <option value="Hybride">Hybride</option>
              <option value="Compacte">Compacte</option>
              <option value="Luxe">Luxe</option>
              <option value="Électrique">Électrique</option>
              <option value="Citadine">Citadine</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-control filter-select" value={transmissionFilter} onChange={handleTransmissionFilterChange}>
              <option value="Toutes">Transmission</option>
              {/* Ajouter les transmissions disponibles */}
              <option value="Automatique">Automatique</option>
              <option value="Manuelle">Manuelle</option>
            </select>
          </div>
          <div className="col-md-2">
            <div className="d-flex gap-2">
              <input
                type="number"
                placeholder="Prix min"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="form-control"
              />
              <input
                type="number"
                placeholder="Prix max"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-2">
            <button onClick={applyFilters} className="btn btn-dark filter-button">
              <i className="fas fa-filter"></i> Filtrer
            </button>
          </div>
        </div>
        {/* Liste des véhicules */}
        <div className="row">
          {currentItems.map(vehicle => (
            <div key={vehicle.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={vehicle.image} className="card-img-top image-uniform" alt={vehicle.name} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-primary">{vehicle.name}</h5>
                    <p className="card-text text-primary">{vehicle.price}€/jour</p>
                  </div>
                  <p className="small">{vehicle.description}</p>
                  <div className="details">
                    <div className="detail-item">
                      <i className="fas fa-user"></i>
                      <span className="text-dark-blue">{vehicle.places}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-gear"></i>
                      <span className="text-dark-blue">{vehicle.transmission}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-fuel-pump"></i>
                      <span className="text-dark-blue">{vehicle.fuel}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100">Réserver</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <nav aria-label="Pagination">
          <ul className="pagination justify-content-center mt-4">
            <li className="page-item">
              <button className="page-link" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
                Précédent
              </button>
            </li>
            {renderPageNumbers()}
            <li className="page-item">
              <button className="page-link" onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}>
                Suivant
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Vehicles;