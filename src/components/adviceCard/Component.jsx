import { WarningModal } from '../../helpers/warningModal';
import { useResize } from '../../hooks/useResize';
import { AdviceIndicator } from '../adviceIndicator/Component';
import { DividerPattern } from '../dividerPattern/Component';
import { GetAdviceButton } from '../getAdviceButton/Component';
import { LoadingIndicator } from '../loadingIndicator/Component';
import { Quote } from '../quote/Component';
import styles from './style.module.scss'

const { card } = styles;


export const AdviceCard = ({adviceData, onAdviceAction, url}) => {
  const {isLoading, fetchedData} = adviceData;

  
  return (
    <div className={card}>
      <div hidden={isLoading}>
        <AdviceIndicator number={isLoading ? 0 : fetchedData.slip.id}/>
      </div>
      <div>
        {
          isLoading
          ? <LoadingIndicator />
          : <Quote citeText={fetchedData.slip.advice} />
        }
      </div>
      <div>
        <DividerPattern />
      </div>
      <GetAdviceButton onAction={() => onAdviceAction(url)}/>
    </div>
  )
}
