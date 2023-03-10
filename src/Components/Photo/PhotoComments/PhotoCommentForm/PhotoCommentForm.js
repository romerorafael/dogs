import React from 'react';
import { ReactComponent as Enviar } from '../../../../Assets/enviar.svg';
import useFetch from '../../../../Hooks/useFetch';
import { COMMENT_POST } from '../../../../Service/api';
import Error from '../../../Helper/Error/Error';
import styles from './PhotoCommentForm.module.css';

const PhotoCommentForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente.."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentForm;
