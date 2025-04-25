import React, { useState } from 'react';
import './auth-styles.css'; // Importer le fichier CSS spécifique

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Connexion réussie !');
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>

      {/* Boutons sociaux */}
      <div className="social-buttons">
        <button className="btn-social btn-google">Google</button>
        <button className="btn-social btn-facebook">Facebook</button>
        <button className="btn-social btn-gmail">Gmail</button>
      </div>

      {/* Lien vers la page d'inscription */}
      <a href="/signup" className="switch-link">Pas encore inscrit ? Créez un compte ici</a>
    </div>
  );
}

export default Login;