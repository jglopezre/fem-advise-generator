import { AdviceCard } from './components/adviceCard/Component';
import { Footer } from './components/footer/Component';
import { useFetch } from './hooks/useFetch';
import styles from './app.module.scss';

const {mainContainer} = styles;

const url = 'https://api.adviceslip.com/advice';

function App() {
  const [ advice, getNewAdvice ] = useFetch( url );

  return (
    <>
      <div className={mainContainer}>
        <AdviceCard  adviceData={ advice } onAdviceAction={ getNewAdvice } url={ url }/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
