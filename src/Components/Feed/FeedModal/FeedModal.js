import React from 'react';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../Service/api';
import styles from './FeedModal.module.css';
import Error from './../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
