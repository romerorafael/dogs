import React from 'react';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data, userLogout, login } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            Minha Conta
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login/Criar
          </Link>
        )}
        {login ? <button onClick={userLogout}> Sair </button> : <div></div>}
      </nav>
    </header>
  );
};

export default Header;
