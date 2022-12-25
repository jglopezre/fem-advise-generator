import style from './style.module.scss'

const { card } = style;

export const WarningAdvice = ({errorMessage, buttonAction}) => {
  return (
    <div className={ card }>
      <div>
        <p>{ errorMessage }</p>
      </div>
      <div>
        <button onClick={ buttonAction }>Intentar de Nuevo</button>
      </div>
    </div>
  )
}
