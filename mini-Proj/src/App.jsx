import {useState} from 'react';
export default function App(){

  return(
    <>
      <h1>This is a mini-vite app...</h1>
      <p>counters that update separately..</p>
      <MyButton/>
      <MyButton/>
    </>
  )
}

function MyButton(){

  const [counter, SetCounter] = useState(0);

  function handleClick(){
      SetCounter(counter + 1);
  }

  return(

    <>
      <button onClick={handleClick}>Count {counter}</button>
    </>
  )
}