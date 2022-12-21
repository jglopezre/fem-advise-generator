import styles from './style.module.scss'
import icon from '../../assets/icon-dice.svg'

const {actionButton} = styles;

export const GetAdviceButton = ({onAction}) => (
  <button className={actionButton} onClick={() => onAction()}>
    <img src={icon} />
  </button> 
)