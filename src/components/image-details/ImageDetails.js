import React from 'react';
import { useGetImageByIdQuery } from '../../apiServices/imageApi';

import styles from '../../styles.module.scss';

const ImageDetails = ({ imageId }) => {
  const { data: image, error, isLoading } = useGetImageByIdQuery(imageId);

  console.log(image);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.imgContainer}>
      <img
        src={image.urls?.regular}
        alt={image.alt_description || 'No description'}
        width={250}
        height={250}
      />
      <div className={styles.likes}>
        <span>{image.likes}</span>
        &nbsp;
        <span className={`fa fa-star checked ${styles.checked}`}></span>
      </div>
      <div className={styles.views}>
        <span>{image.views}</span>
        &nbsp;
        <i className="fa fa-eye" style={{ fontSize: '24px' }}></i>
      </div>
      <div className={styles.user}>
        <span>{image.user.name}</span>
      </div>
    </div>
  );
};

export default ImageDetails;
