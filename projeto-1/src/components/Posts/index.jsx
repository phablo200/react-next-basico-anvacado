import React from 'react';
import { PostCard } from '../PostCard';
import './styles.css';
import P from 'prop-types';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard {...post} key={post.id} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
