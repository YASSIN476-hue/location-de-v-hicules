import React, { useState, useEffect, useRef } from 'react';
import './styles.css'; // Importer le fichier CSS

// Importer les images du slider
import slider1 from '../assets/images/slider-1.png';
import slider2 from '../assets/images/slider-2.png';
import slider3 from '../assets/images/slider-3.jpg';
import slider4 from '../assets/images/slider-4.jpg';
import slider5 from '../assets/images/slider-5.jpg';
import slider6 from '../assets/images/slider-6.jpg';
import slider7 from '../assets/images/slider-7.jpg';

// Simuler une liste de véhicules
const vehiclesData = [
  {
    id: 1,
    name: "Mercedes Classe C",
    price: 89,
    image: "/images/mercedes-classe-c.png", // Chemin vers l'image dans public
    discount: 25,
    endDate: "30/04/2024",
    description: "Location à partir de 89€/jour"
  },
  {
    id: 2,
    name: "BMW Série 5",
    price: 994,
    image: "/images/bmw-serie-5.png", // Chemin vers l'image dans public
    discount: 20,
    endDate: "30/04/2024",
    description: "Location à partir de 994€/jour"
  },
  {
    id: 3,
    name: "Audi Q5",
    price: 1099,
    image: "/images/audi-q5.png", // Chemin vers l'image dans public
    discount: 30,
    endDate: "30/04/2024",
    description: "Location à partir de 1099€/jour"
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // État pour l'animation
  const slides = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];
  const vehicleRefs = useRef([]); // Références pour les cartes de voitures

  // Défilement automatique du slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true); // Démarrer l'animation
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setIsAnimating(false); // Terminer l'animation après la transition
        }, 1000); // Durée de l'animation (1 seconde)
      }
    }, 5000); // Change d'image toutes les 5 secondes
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Observer les éléments et ajouter une classe d'animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Ajouter la classe d'animation
          }
        });
      },
      {
        threshold: 0.5, // Déclencher l'animation lorsque 50% de l'élément est visible
      }
    );

    // Observer chaque carte de voiture
    vehicleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      vehicleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="home">
      {/* Slider */}
      <div className="slider-container">
        <img
          src={slides[currentSlide]}
          alt={`Image promotionnelle ${currentSlide + 1}`}
          className={`slider-image ${isAnimating ? 'fade-out' : 'fade-in'}`}
        />
        {/* Overlay avec le texte et le bouton */}
        <div className="slider-overlay-left">
          <h1>L'Excellence Automobile </h1>
          <h1>à Votre Service</h1>
          <p>Découvrez notre collection exclusive de véhicules de prestige pour une</p>
          <p>expérience de conduite incomparable</p>
          <button className="btn btn-primary">Découvrir Notre Flotte</button>
        </div>
      </div>

      {/* Promotions en cours */}
      <div className="container mt-5">
        <h2>Promotions en cours</h2>
        <div className="row">
          {vehiclesData.slice(0, 3).map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="col-md-4 mb-4"
              ref={(el) => (vehicleRefs.current[index] = el)} // Ajouter une référence
            >
              <div className="card h-100 vehicle-card">
                <img
                  src={vehicle.image}
                  className="card-img-top image-uniform"
                  alt={vehicle.name}
                />
                <div className="card-body">
                  {/* Badge de réduction */}
                  <div className="promotion-badge">
                    <span>-{vehicle.discount}%</span>
                  </div>
                  <p className="small">{`Jusqu'au ${vehicle.endDate}`}</p>
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">{vehicle.description}</p>
                  <button className="btn btn-primary w-100">Réserver maintenant</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;