import { AdviceCard } from './components/adviceCard/Component';
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
  const [ advice, fetchData ] = useFetch( url );


  return (
    <div style={ style.mainContainer }>
      <AdviceCard  adviceData={ advice } onAdviceAction={ fetchData  } url={ url }/>
     
    </div>
  );
}

export default App;
