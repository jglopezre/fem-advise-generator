import { useState } from 'react';
import { AdviceIndicator } from '../adviceIndicator/Component';
import { GetAdviceButton } from '../getAdviceButton/Component';
import styles from './style.module.scss'

const {card, quote} = styles;


export const AdviceCard = ({adviceData, onAdviceAction, url}) => {

  const [item, setItem] = useState();

   
  return (
    <div className={card}>
      <div>
        <AdviceIndicator />
      </div>
      <div>
        <h1 className={quote}>una cagada</h1>
      </div>
      <div>
        <GetAdviceButton onAction={() => onAdviceAction(url)}/>
      </div>
    </div>
  )
}
