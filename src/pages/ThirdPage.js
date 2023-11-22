import React, { useState } from 'react';
import {
  useGetPostsQuery,
  useCreatePostMutation,
} from '../apiServices/placeholderApi';
import styles from '../styles.module.scss';

const ThirdPage = () => {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [createPost] = useCreatePostMutation();
  const { data /*, error , isLoading */ } = useGetPostsQuery();

  const handleSubmit = () => {
    createPost({
      userId: 231,
      title,
      body: post,
    });
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title here"
        />
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Body here"
        />
        <button onClick={handleSubmit}>Submit Post</button>
      </div>
      <div className={styles.postLayout}>
        {data?.map((item) => (
          <div className={styles.postDisplay} key={item.id}>
            <span>Post ID: {item.id}</span>
            <span>Title: {item.title.substring(0, 20)}</span>
            <br />
            <span>{item.body.substring(0, 88)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
