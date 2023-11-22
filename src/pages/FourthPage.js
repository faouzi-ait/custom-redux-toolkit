// ImageList.js
import React from 'react';
import { ImageDetails } from '../components';

import { useGetImagesQuery } from '../apiServices/imageApi';

const ImageList = () => {
  const { data: images, error, isLoading } = useGetImagesQuery();

  // console.log(images);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 275px)',
        justifyContent: 'center',
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
