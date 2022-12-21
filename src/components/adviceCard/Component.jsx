import { AdviceIndicator } from '../adviceIndicator/Component';
import { DividerPattern } from '../dividerPattern/Component';
import { GetAdviceButton } from '../getAdviceButton/Component';
import { Quote } from '../quote/Component';
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
        <Quote citeText={isLoading ? 'cargando ...' : fetchedData.slip.advice} />
      </div>
      <div>
        <DividerPattern />
      </div>
      <GetAdviceButton onAction={() => onAdviceAction(url)}/>
    </div>
  )
}
