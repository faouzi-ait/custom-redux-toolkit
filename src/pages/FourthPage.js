// ImageList.js
import React from 'react';
import { ImageDetails } from '../components';

import { useGetImagesQuery } from '../apiServices/imageApi';

// import styles from '../styles.module.scss';

const ImageList = () => {
  const { data: images, error, isLoading } = useGetImagesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
      }}
    >
      {images.map((image) => (
        <div key={image.id}>
          <ImageDetails imageId={image.id} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
