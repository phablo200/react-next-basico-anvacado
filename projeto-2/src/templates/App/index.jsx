import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
