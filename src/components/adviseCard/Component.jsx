import { AdviseIndicator } from '../adviseIndicator/Component';
import { GetAdviseButton } from '../getAdviseButton/Component';
import styles from './style.module.scss'

const {card, quote} = styles;


export const AdviseCard = ({adviceData}) => {

  const item = (adviceData.fetchedData.slip);

  return (
    <div className={card}>
      <div>
        <AdviseIndicator number={item.id}/>
      </div>
      <div>
        <h1 className={quote}>{item.advice}</h1>
      </div>
      <div>
        <GetAdviseButton onAction={() => console.log('presionado')}/>
      </div>
    </div>
  )
}
