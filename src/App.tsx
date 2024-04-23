import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Login />
      </div>
    </Router>
  );
};

export default App;
