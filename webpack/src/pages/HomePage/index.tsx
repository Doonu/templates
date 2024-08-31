import { faik } from '@shared/lib';
import { shared } from '@shared/strings';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  faik('f');

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button onClick={toggle}>{t(shared.translate)}</Button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomePage;
