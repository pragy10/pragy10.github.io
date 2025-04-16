import React from 'react';

const ProfileImage = ({ imageUrl, altText }) => {
  return (<div className="profile-image-container"><img  src={imageUrl}  alt={altText || "User profile"}  className="profile-image" width="200px"/> </div> );
};

export default ProfileImage;
