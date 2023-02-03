import React from 'react';
import styles from './FeedPhotoItem.module.css';

const FeddPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.tilte} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeddPhotosItem;
