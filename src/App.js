import { AdviseCard } from './components/adviseCard/Component';
import { useFetch } from './hooks/useFetch';

const style = {
  mainContainer: {
    backgroundColor: 'hsl(218, 23%, 16%)',
    width: '100%',
    minWidth: '375px',
    heigth: '100vh'
  }
}

const url = 'https://api.adviceslip.com/advice';

function App() {
  const advice = useFetch(url);

  return (
    <div style={style.mainContainer}>
      <AdviseCard  adviceData={advice}/>
     
    </div>
  );
}

export default App;
