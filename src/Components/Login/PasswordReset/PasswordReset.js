import React from 'react';
import useForm from '../../../Hooks/useForm';
import { PASSWORD_RECOVER } from '../../../Service/api';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import useFecth from '../../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Error from '../../Helper/Error/Error';

const PasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFecth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = PASSWORD_RECOVER({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      navigate('/login');
    }
  }
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get('key');
    const loginParam = params.get('login');
    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        {loading ? (
          <Button disabled>Resentando </Button>
        ) : (
          <Button> Resetar </Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default PasswordReset;
