import styles from './style.module.scss';

const { barsContainer } = styles;

export const LoadingIndicator = () => {
  return (
    <div className={ barsContainer }>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
