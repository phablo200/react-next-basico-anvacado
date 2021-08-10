import { useContext, useEffect, useRef } from 'react';
import { descrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  console.log(counterState);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
      console.log('isMounted', isMounted);
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter} +</button>
      <button onClick={() => descrementCounter(counterDispatch)}>Counter {counterState.counter} -</button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((p) => {
        return <p key={p.id}>{p.title}</p>;
      })}
    </div>
  );
};
