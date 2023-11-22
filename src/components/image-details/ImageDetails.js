// ImageDetails.js
import React from 'react';
import { useGetImageByIdQuery } from '../../apiServices/imageApi';

const ImageDetails = ({ imageId }) => {
  const { data: image, error, isLoading } = useGetImageByIdQuery(imageId);

  // console.log(image);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <img
        src={image.urls?.regular}
        alt={image.alt_description || 'No description'}
        width={250}
        height={250}
      />
      <p>{image.alt_description || 'No description'}</p>
    </>
  );
};

export default ImageDetails;
