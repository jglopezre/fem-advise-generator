import { AdviceCard } from './components/adviceCard/Component';
import { Footer } from './components/footer/Component';
import { useFetch } from './hooks/useFetch';
import { WarningAdvice } from './components/warningAdvice/Component';
import styles from './app.module.scss';

const {mainContainer} = styles;

const url = 'https://api.adviceslip.com/advice';

function App() {
  const [ advice, getNewAdvice ] = useFetch( url );
  const {isError, message} = advice;

  return (
    <>
      <div className={mainContainer}>
        {
          isError
          ? <WarningAdvice errorMessage={ message } buttonAction={ () => getNewAdvice(url) }/>
          : <AdviceCard  adviceData={ advice } onAdviceAction={ getNewAdvice } url={ url }/>
        }
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
