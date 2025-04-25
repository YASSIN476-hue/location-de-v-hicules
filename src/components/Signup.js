import React, { useState } from 'react';
import './auth-styles.css'; // Importer le fichier CSS spécifique

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Inscription réussie !');
  };

  return (
    <div className="auth-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>

      {/* Boutons sociaux */}
      <div className="social-buttons">
        <button className="btn-social btn-google">Google</button>
        <button className="btn-social btn-facebook">Facebook</button>
        <button className="btn-social btn-gmail">Gmail</button>
      </div>

      {/* Lien vers la page de connexion */}
      <a href="/login" className="switch-link">Déjà inscrit ? Connectez-vous ici</a>
    </div>
  );
}

export default Signup;