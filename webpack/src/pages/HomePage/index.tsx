import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    Home
  </div>
);

export default HomePage;
