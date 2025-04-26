import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

// Importer les images du slider
import slider1 from '../assets/images/slider-1.png';
import slider2 from '../assets/images/slider-2.png';
import slider3 from '../assets/images/slider-3.jpg';
import slider4 from '../assets/images/slider-4.jpg';
import slider5 from '../assets/images/slider-5.jpg';
import slider6 from '../assets/images/slider-6.jpg';
import slider7 from '../assets/images/slider-7.jpg';

// Simuler une liste de 54 véhicules
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
  const navigate = useNavigate(); // Pour la navigation

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
    }, 4000); // Change d'image toutes les 5 secondes
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

  // Témoignages Clients
  const testimonials = [
    {
      avatar: "/images/avatar-pierre-dubois.p5g",
      name: "Pierre Dubois",
      title: "CEO, Tech Solutions",
      text: "Un service exceptionnel et des véhicules impeccables. Je recommande vivement pour les déplacements professionnels.",
    },
    {
      avatar: "/images/avatar-marie-laurent.p4g",
      name: "Marie Laurent",
      title: "Architecte",
      text: "La qualité des véhicules et l'attention portée aux détails sont remarquables. Une expérience de location haut de gamme.",
    },
    {
      avatar: "/images/avatar-jean-martin.p7g",
      name: "Jean Martin",
      title: "Entrepreneur",
      text: "Le service de conciergerie 24/7 est vraiment un plus. Une tranquillité d'esprit totale pendant la location.",
    },
    {
      avatar: "/images/avatar-pierre-dubois.p5g",
      name: "Sophie Thomas",
      title: "Consultante",
      text: "Expérience incroyable avec des véhicules de haute qualité et un service irréprochable.",
    },
    {
      avatar: "/images/avatar-marie-laurent.p4g",
      name: "Julien Rodriguez",
      title: "Ingénieur",
      text: "Les véhicules sont toujours propres et bien entretenus. Service impeccable !",
    },
    {
      avatar: "/images/avatar-jean-martin.p7g",
      name: "Lucie Martinez",
      title: "Comptable",
      text: "Une expérience fluide et sans souci. Les véhicules sont toujours disponibles et en parfait état.",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 3) % testimonials.length); // Afficher 3 témoignages à la fois
    }, 5000); // Changer tous les 5 secondes
    return () => clearInterval(testimonialInterval);
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
          {vehiclesData.slice(0, 3).map((vehicle) => (
            <div key={vehicle.id} className="col-md-4 mb-4">
              <div className="card h-100 vehicle-card">
                <img src={vehicle.image} className="card-img-top image-uniform" alt={vehicle.name} />
                <div className="card-body">
                  {/* Badge de réduction */}
                  <div className="promotion-badge">
                    <span>-{vehicle.discount}%</span>
                  </div>
                  <p className="small">{`Jusqu'au ${vehicle.endDate}`}</p>
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">{vehicle.description}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate(`/reservation/${vehicle.id}`)} // Redirection vers la page de réservation
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catégories de véhicules */}
      <div className="container mt-5">
        <h2>Nos Catégories de Véhicules</h2>
        <div className="row">
          <div className="col-md-4">
            <Link to="/vehicles?category=Luxe" className="category-card">
              <img src="/images/luxe.png" alt="Catégorie Luxe" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/vehicles?category=Sport" className="category-card">
              <img src="/images/sports.png" alt="Catégorie Sport" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/vehicles?category=SUV" className="category-card">
              <img src="/images/suv.png" alt="Catégorie SUV" />
            </Link>
          </div>
        </div>
      </div>

      {/* Nos Offres Expérimentelles */}
      <div className="container mt-5">
        <h2>Nos Offres Expérimentelles</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="offer-card">
              <img src="/images/offre-week-end-luxe.png" alt="Week-end Grand Luxe" />
              <h3>Week-end Grand Luxe</h3>
              <p>Offrez-vous un week-end inoubliable au volant d'une voiture d'exception</p>
              <button className="btn btn-primary w-100">Réserver</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="offer-card">
              <img src="/images/offre-road-trip-electrique.png" alt="Road Trip Écologique" />
              <h3>Road Trip Écologique</h3>
              <p>Découvrez nos véhicules électriques pour un voyage responsable</p>
              <button className="btn btn-primary w-100">Réserver</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="offer-card">
              <img src="/images/offre-experience-sportive.png" alt="Experience Sport" />
              <h3>Experience Sport</h3>
              <p>Vivez l'adrénaline au volant de nos sportives les plus performantes</p>
              <button className="btn btn-primary w-100">Réserver</button>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages Clients */}
      <div className="container mt-5">
        <h2>Témoignages de Nos Clients</h2>
        <div className="row">
          {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3).map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-body">
                  <h5>{testimonial.name}</h5>
                  <p className="testimonial-title">{testimonial.title}</p>
                  <p className="testimonial-text">“{testimonial.text}”</p>
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
