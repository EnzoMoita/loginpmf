// LoginPage.tsx
import React, { useState, FormEvent } from 'react';
import '../styles/LoginPage.css';
import Topbar from './Topbar';
import loginimage from '../img/homi.svg'; // Importe o componente Topbar

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Login Submitted', { username, password });
    // Aqui você normalmente lidaria com a lógica de login
  };

  return (
    <>
      <Topbar /> {/* Adicione a Topbar aqui */}
      <div className="login-container">
        <img src={loginimage} alt="Imagem de Login" className="login-image" /> {/* Adicione a classe login-image */}
        <form onSubmit={handleSubmit} className="login-form">
          <h2>LOGIN</h2>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          <div className="login-footer">
            <span>Esqueceu a senha?</span>
            <span>Ainda não tem conta? <a href="#register">Clique aqui!</a></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
