import styles from './style.module.scss'

const {indicator} = styles;


export const AdviseIndicator = ({number = 0}) => {
  return (
    <h1 className={indicator}>{`ADVICE #${number}`}</h1>
  )
}