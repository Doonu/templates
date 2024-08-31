import React from 'react';
import { Link } from 'react-router-dom';

import { SComponent } from './about.styles';

const AboutPage = () => (
  <div>
    <SComponent />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default AboutPage;
