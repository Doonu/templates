import { faik } from '@shared/lib';
import { Link } from 'react-router-dom';

const HomePage = () => {
  faik('f');
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomePage;
