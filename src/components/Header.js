import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
