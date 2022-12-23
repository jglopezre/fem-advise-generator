import desktopPattern from '../../assets/pattern-divider-desktop.svg';
import mobilePattern from '../../assets/pattern-divider-mobile.svg';
import { useResize } from '../../hooks/useResize';


export const DividerPattern = () => {
  const [windowSize] = useResize();
  return (
    <>
      { 
        windowSize.width > 1280
        ? <img src={desktopPattern}/>
        : <img src={mobilePattern}/>
      }
    </>
  )
} 