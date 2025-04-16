import React from 'react';

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      <h3>My Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <span className="post-date">{post.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPosts;
