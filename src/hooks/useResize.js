import { useEffect, useState } from "react"


export const useResize = () => {
  const [size, setSize] = useState({width: 0, height: 0});

  const getSize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    return {...size}
  }
  
  useEffect(() => {
    getSize()
    window.addEventListener("resize", getSize)
  
    return () => {
      window.removeEventListener("resize", getSize);
    }
  }, [])
  
  return [
    {...size},
    setSize
  ]
}