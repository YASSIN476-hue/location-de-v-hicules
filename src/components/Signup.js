import React from 'react';

function Signup() {
  return (
    <section id="signup">
      <div className="container mt-5">
        <h2>Inscription</h2>
        <form>
          <div className="form-group">
            <label htmlFor="signup-name">Nom</label>
            <input type="text" className="form-control" id="signup-name" placeholder="Votre nom" />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input type="email" className="form-control" id="signup-email" placeholder="Votre email" />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Mot de passe</label>
            <input type="password" className="form-control" id="signup-password" placeholder="Votre mot de passe" />
          </div>
          <button type="submit" className="btn btn-primary">S'inscrire</button>
        </form>
      </div>
    </section>
  );
}

export default Signup;