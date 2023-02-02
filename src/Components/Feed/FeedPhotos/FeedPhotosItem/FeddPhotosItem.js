import React from 'react';
import styles from './FeedPhotoItem.module.css';

const FeddPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.tilte} />
      <span className={styles.visualizacao}>{photo.acesso}</span>
    </li>
  );
};

export default FeddPhotosItem;
