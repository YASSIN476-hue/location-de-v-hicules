import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container mt-5">
        <h2>Contactez-nous</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" className="form-control" id="name" placeholder="Votre nom" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Votre email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Votre message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;