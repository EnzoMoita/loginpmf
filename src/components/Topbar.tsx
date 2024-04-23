// Topbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando React Router
import '../styles/Topbar.css'; // Importe o arquivo CSS aqui

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>Pague+Fácil</span>
      </div>
      <div className="topbar-right">
        <Link to="/">Home</Link>
        <Link to="/cadastro" className="signup-link">Cadastrar-se</Link>
      </div>
    </div>
  );
};

export default Topbar;
