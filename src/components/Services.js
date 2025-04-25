import React from 'react';
import './services.css'; // Importer le fichier CSS spécifique

function Services() {
  return (
    <section className="services-container">
      {/* Image en haut */}
      <img
        src="/images/service.jpg" // Remplacez par votre chemin d'image
        alt="Nos Services"
        className="top-image"
      />

      {/* Services de Location */}
      <div className="section-title">Nos Services</div>
      <div className="services-list">
        <div className="service-item">
          <h3>Location courte durée</h3>
          <p>Location flexible pour vos besoins ponctuels.</p>
        </div>
        <div className="service-item">
          <h3>Location longue durée</h3>
          <p>Solutions adaptées pour des locations prolongées.</p>
        </div>
        <div className="service-item">
          <h3>Conciergerie</h3>
          <p>Service personnalisé pour une expérience premium.</p>
        </div>
        <div className="service-item">
          <h3>Service VIP</h3>
          <p>Offrez-vous une expérience exclusive avec nos services VIP.</p>
        </div>
      </div>

      {/* Nos Avantages */}
      <div className="section-title">Nos Avantages</div>
      <div className="advantages-list">
        <div className="advantage-item">
          <h4>Flotte récente et entretenue</h4>
          <p>Véhicules toujours en parfait état.</p>
        </div>
        <div className="advantage-item">
          <h4>Assurance complète</h4>
          <p>Couverture totale pour votre tranquillité.</p>
        </div>
        <div className="advantage-item">
          <h4>Assistance 24/7</h4>
          <p>Notre équipe est disponible à tout moment.</p>
        </div>
        <div className="advantage-item">
          <h4>Plusieurs points de service</h4>
          <p>Retrouvez-nous dans plusieurs villes.</p>
        </div>
      </div>

      {/* Notre Processus */}
      <div className="section-title">Notre Processus</div>
      <div className="process-steps">
        <div className="process-step">
          <h4>1. Réservation</h4>
          <p>Choisissez votre véhicule en ligne ou en agence.</p>
        </div>
        <div className="process-step">
          <h4>2. Prise en charge</h4>
          <p>Récupérez votre véhicule à l'heure convenue.</p>
        </div>
        <div className="process-step">
          <h4>3. Utilisation</h4>
          <p>Profitez de votre location en toute sérénité.</p>
        </div>
        <div className="process-step">
          <h4>4. Retour</h4>
          <p>Restituez le véhicule à l'agence ou à un point relais.</p>
        </div>
      </div>

      {/* Questions Fréquentes */}
      <div className="section-title">Questions Fréquentes</div>
      <div className="faq-section">
        <div className="faq-item">
          <h5>Quels documents sont nécessaires pour louer un véhicule ?</h5>
          <p>Permis de conduire valide et pièce d'identité.</p>
        </div>
        <div className="faq-item">
          <h5>Quelle est la durée minimale de location ?</h5>
          <p>La durée minimale est de 1 jour.</p>
        </div>
        <div className="faq-item">
          <h5>Le kilométrage est-il limité ?</h5>
          <p>Non, le kilométrage est illimité.</p>
        </div>
        <div className="faq-item">
          <h5>Puis-je ajouter un conducteur supplémentaire ?</h5>
          <p>Oui, moyennant un supplément.</p>
        </div>
        <div className="faq-item">
          <h5>Comment fonctionne l'assurance ?</h5>
          <p>L'assurance couvre tous les dommages accidentels.</p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="cta-section">
        <button>Si vous avez d'autres questions, contactez-nous</button>
      </div>

      {/* Prêt à réserver votre véhicule */}
      <div className="section-title">Prêt à réserver votre véhicule ?</div>
      <div className="cta-section">
        <p>
          Découvrez notre flotte de véhicules et trouvez celui qui correspond
          parfaitement à vos besoins.
        </p>
        <button>Voir nos véhicules</button>
        <button>Nous contacter</button>
      </div>
    </section>
  );
}

export default Services;