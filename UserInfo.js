import React from 'react';

const UserInfo = ({ name, email, bio }) => {
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p className="email">{email}</p>
      <div className="bio">
        <h3>About Me</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserInfo;
