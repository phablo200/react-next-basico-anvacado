import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function App() {
  return (
    <div className="App">
      <Styled.Wrapper background="red">
        <Heading>O texto que eu quero</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
