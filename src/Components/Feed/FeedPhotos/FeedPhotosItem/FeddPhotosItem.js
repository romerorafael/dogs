import React from 'react';
import Image from '../../../Helper/Image/Image';
import styles from './FeedPhotoItem.module.css';

const FeddPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeddPhotosItem;
