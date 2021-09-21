import { useEffect, useRef, useState } from "react"

export const useFetch =  ( url ) => {
  // console.log("entre en el useFetch")

  const [state, setState] = useState({ data: null, loading: true, error: null });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    // console.log("entre en el useEffect de useFetch")
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then( res => res.json())
      .then( data => {
        if ( isMounted.current ) {
          setState({
          loading: false,
          error: null,
          data: data
          })
        }
      })
      .catch( () => { // no está entrando nunca acá. Cuando no hay data en una url devuelve un array vacío en los then 
        setState({
          loading: false,
          error: 'mensaje de la app: ocurrió un error en la petición',
          data: null
        })
      })
  }, [url])

  return( state )
}
