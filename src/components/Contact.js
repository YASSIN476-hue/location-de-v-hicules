import React from 'react';
import './contact.css'; // Importer le fichier CSS spécifique

function Contact() {
  return (
    <div className="container">
      {/* Informations de Contact */}
      <div className="section">
        <h2>Informations de contact</h2>
        <p>N'hésitez pas à nous contacter pour toute question concernant nos services de location de véhicules.</p>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <strong>Téléphone</strong>
            <p>+212 767440130</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <strong>Email</strong>
            <p>yassine14@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <strong>Adresse</strong>
            <p>NR Lot De La Province, ERRACHIDIA</p>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <strong>Heures d'ouverture</strong>
            <p>Lun-Sam: 8h-19h | Dim: 9h-17h</p>
          </div>
        </div>
      </div>

      {/* Formulaire de Contact */}
      <div className="section">
        <h2>Envoyez-nous un message</h2>
        <form className="contact-form">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" placeholder="Votre nom" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="votre@email.com" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" placeholder="Votre numéro de téléphone" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="subject">Sujet</label>
              <select id="subject" required>
                <option value="">Sélectionner un sujet</option>
                <option value="location">Location de véhicule</option>
                <option value="reservation">Réservation</option>
                <option value="assistance">Assistance clientèle</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Votre message" required></textarea>
            </div>
          </div>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>

      {/* Suivez-nous */}
      <div className="section">
        <h3>Suivez-nous</h3>
        <div className="social-links">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Questions Fréquentes (FAQ) */}
      <div className="section">
        <h2>Questions Fréquentes</h2>
        <div className="faq-section">
          <div className="faq-item">
            <h3>Quels sont vos horaires d'ouverture ?</h3>
            <p>Nous sommes ouverts du lundi au samedi de 8h à 19h et le dimanche de 9h à 17h.</p>
          </div>
          <div className="faq-item">
            <h3>Comment puis-je réserver un véhicule ?</h3>
            <p>Vous pouvez réserver en ligne, par téléphone ou directement à notre agence.</p>
          </div>
          <div className="faq-item">
            <h3>Proposez-vous un service de livraison ?</h3>
            <p>Oui, nous proposons la livraison et la reprise de votre véhicule à l'adresse de votre choix moyennant des frais supplémentaires.</p>
          </div>
          <div className="faq-item">
            <h3>Comment puis-je annuler ma réservation ?</h3>
            <p>Vous pouvez annuler votre réservation jusqu'à 48h avant la date de prise en charge sans frais. Passé ce délai, des frais d'annulation peuvent s'appliquer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;