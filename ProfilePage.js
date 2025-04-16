import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  const userData = {
    name: "Pragya Sekar",
    email: "pragya.skr10@gmail.com",
    bio: "Frontend developer passionate about creating intuitive user experiences.",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Female_Icon-2836559.png/640px-Female_Icon-2836559.png",
    posts: [
      {
        id: 1,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces...",
        date: "March 15, 2025"
      },
      {
        id: 2,
        title: "Component-Based Architecture",
        content: "Breaking down UI into reusable components helps maintain...",
        date: "March 20, 2025"
      }
    ]
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <ProfileImage 
          imageUrl={userData.profileImage} 
          altText={`${userData.name}'s profile`} 
        />
        <UserInfo 
          name={userData.name} 
          email={userData.email} 
          bio={userData.bio} 
        />
      </div>
      <UserPosts posts={userData.posts} />
    </div>
  );
};

export default ProfilePage;
