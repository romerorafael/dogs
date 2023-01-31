import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import styles from '../Login/Login.module.css';

import LoginForm from './LoginForm/LoginForm';
import LoginCreate from './LoginCreate/LoginCreate';
import PasswordLost from './PasswordLost/PasswordLost';
import PasswordReset from './PasswordReset/PasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginCreate />}></Route>
          <Route path="perdeu" element={<PasswordLost />}></Route>
          <Route path="resetar" element={<PasswordReset />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
