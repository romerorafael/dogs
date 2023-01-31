import React from 'react';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';

import styles from '../LoginForm/LoginForm.module.css';

import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import Error from '../../Helper/Error/Error';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  const { userLogin, error, login, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate && password.validate()) {
      userLogin(userName.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/pedeu">
        Perder a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styles.buttonCriar} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
