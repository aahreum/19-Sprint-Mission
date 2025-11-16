import { Link } from 'react-router';
import logos from '@/assets/logo';
import styles from './Logo.module.css';

interface LogoProps {
  link?: string;
}

const Logo = ({ link = '/' }: LogoProps) => {
  return (
    <h1 className={styles.container}>
      <Link to={link}>
        <img className={styles.img} src={logos.logo} alt="판다마켓 로고" />
      </Link>
    </h1>
  );
};

export default Logo;
