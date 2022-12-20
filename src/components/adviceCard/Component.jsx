import { AdviceIndicator } from '../adviceIndicator/Component';
import { GetAdviceButton } from '../getAdviceButton/Component';
import styles from './style.module.scss'

const { card, quote } = styles;


export const AdviceCard = ({adviceData, onAdviceAction, url}) => {
  const {isLoading, fetchedData} = adviceData;
  
  return (
    <div className={card}>
      <div hidden={isLoading}>
        <AdviceIndicator number={isLoading ? 0 : fetchedData.slip.id}/>
      </div>
      <div>
        <h1 className={quote}>{isLoading ? 'cargando ...' : fetchedData.slip.advice}</h1>
      </div>
      <div>
        <GetAdviceButton onAction={() => onAdviceAction(url)}/>
      </div>
    </div>
  )
}
