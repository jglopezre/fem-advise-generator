import styles from './style.module.scss'
import icon from '../../assets/icon-dice.svg'

const {actionButton} = styles;

export const GetAdviceButton = ({onAction}) => (
  <button className={actionButton} onClick={() => onAction()}>
    <div>
      <img src={icon} />
    </div>
  </button> 
)