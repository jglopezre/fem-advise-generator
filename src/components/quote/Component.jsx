import style from './style.module.scss';

const {quote} = style;

export const Quote = ({citeText}) => (
  <p className={quote}>
    {`"${citeText}"`}
  </p>
)
