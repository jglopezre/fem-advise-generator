export const useFetch = (url) => {
  const respObject = {
    isError: false,
    message: '',
    fetchedData: {}
  };

  (async() => {
    try {
      const response = await fetch(url)
      if(response.ok) {
        respObject.fetchedData = await response.json();
        respObject.isError = false;
        respObject.message = ''
      } else {
        respObject.isError = true;
        respObject.message = 'Disculpe, el contenido no esta disponible, intente luego'
        respObject.fetchedData = {};
      }
    } catch(err) {
      respObject.isError = true;
      respObject.message = `Disculpe, ocurrió un problema en la comunicación, intente de nuevo. Error: ${err}`
      respObject.fetchedData = {};
    }
  })();

  return respObject
} 


