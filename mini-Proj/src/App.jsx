import {useState} from 'react';
import './App.css';

function App(){

  const[count,setCount] = useState(0);

  return(
    <>
      <h1>This is a first vite-react App...</h1>
      <p>Under there is a button that changes the value of count on click...</p>
      <p>hello there</p>
      <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
    </>
  )
}
export default App

