import styles from './style.module.scss'

const {indicator} = styles;


export const AdviceIndicator = ({number = 0}) => {
  return (
    <h1 className={indicator}>{`ADVICE #${number}`}</h1>
  )
}