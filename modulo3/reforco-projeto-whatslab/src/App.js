import Conversa from './Components/Conversa';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;  
  height: 100vh;
`

function App() {
  return (
    <Main>
      <Conversa>
      </Conversa>
    </Main>
  );
}

export default App;
