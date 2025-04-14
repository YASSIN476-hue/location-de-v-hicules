import React from 'react';

function Login() {
  return (
    <section id="login">
      <div className="container mt-5">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input type="email" className="form-control" id="login-email" placeholder="Votre email" />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Mot de passe</label>
            <input type="password" className="form-control" id="login-password" placeholder="Votre mot de passe" />
          </div>
          <button type="submit" className="btn btn-primary">Se connecter</button>
        </form>
      </div>
    </section>
  );
}

export default Login;