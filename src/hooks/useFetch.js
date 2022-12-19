import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState({
    isError: false,
    message: '',
    fetchedData: {}
  })

  const onFetching = async(url) => {
    
    try {
      const response = await fetch(url);
      
      if(response.ok) {
        const fetchedData = await response.json();
        return {
          ...data,
          fetchedData
        }
      

        /* respObject.fetchedData = await response.json();
        respObject.isError = false;
        respObject.message = '' */
      } else {
        /* respObject.isError = true;
        respObject.message = 'Disculpe, el contenido no esta disponible, intente luego'
        respObject.fetchedData = {}; */
      }
      
    } catch(err) {
      /* respObject.isError = true;
      respObject.message = `Disculpe, ocurrió un problema en la comunicación, intente de nuevo. Error: ${err}`
      respObject.fetchedData = {}; */
    }
  };


 
  
    
 

  /* const fetchData = (url) => {
    onFetching(url).then(setFetchedData);
    return fetchedData;
  } */

  onFetching(url).then(console.log)
 

  
  return [{}, ()=>{}]
} 


