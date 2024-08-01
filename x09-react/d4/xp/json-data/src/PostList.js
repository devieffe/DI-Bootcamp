import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('./posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>Date: {post.date}</small><br />
          <small>Slug: {post.slug}</small>
        </div>
      ))}
    </div>
  );
}

export default PostList;