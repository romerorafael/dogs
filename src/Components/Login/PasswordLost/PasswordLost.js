import React from 'react';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import useForm from '../../../Hooks/useForm';
import { PASSWORD_LOST } from '../../../Service/api';
import Error from '../../Helper/Error/Error';

const PasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useForm();
  const location = window.location.href.replace('perder', 'resetar');
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: location,
    });
    await request(url, options);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}> {data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input type="text" label="Email / usuário" name="email" />
          {loading ? (
            <Button disabled> Carregando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default PasswordLost;
