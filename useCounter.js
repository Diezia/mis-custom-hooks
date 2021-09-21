import { useState } from "react"

export const useCounter = ( initialCounter = 0, minValue = 0, maxValue = 100000 ) => {
  // Agregarle uno o dos parámetros para que se pueda indicar (desde el componente que llama a useCounter) el número máximo y el número mínimo que puede tomar el counter
  const [counter, setCounter] = useState(initialCounter)
  // console.log("entre en el useCounter")
  const increment = () => {
    // console.log("increment");
    maxValue > counter && setCounter( counter + 1 )
  }
  const decrement = () => {
    // console.log("decrement");
    minValue < counter && setCounter( counter - 1 )
  }
  const reset = () => {
    // console.log("reset");
    setCounter( initialCounter )
  }
  const random = () => {
    // console.log("random");
    const rand = minValue + Math.random() * (maxValue - minValue);
    const randint = Math.floor( rand )
    setCounter( randint );
  }
  

  return({
    counter,
    increment,
    decrement,
    reset,
    random
  })
}
