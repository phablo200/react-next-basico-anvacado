import './styles.css';
import React, { useEffect, useState, useCallback } from 'react';
import { loadPosts } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    // console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handlerChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {searchValue && <h1>Search value {searchValue}</h1>}
        <TextInput onChange={handlerChange} value={searchValue} />
      </div>
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length == 0 && <p>Não existem posts =(</p>}
      <div className="button-container">
        {!searchValue && <Button text="Load more posts" disabled={noMorePosts} onClick={loadMorePosts} />}
      </div>
    </section>
  );
};