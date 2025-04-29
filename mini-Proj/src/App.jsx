// import {useState} from 'react';
// export default function App(){

//   return(
//     <>
//       <h1>This is a mini-vite app...</h1>
//       <p>counters that update separately..</p>
//       <MyButton/>
//       <MyButton/>
//     </>
//   )
// }

// function MyButton(){

//   const [counter, SetCounter] = useState(0);

//   function handleClick(){
//       SetCounter(counter + 1);
//   }

//   return(

//     <>
//       <button onClick={handleClick}>Count {counter}</button>
//     </>
//   )
// }


import {useState} from 'react';

export default function App(){

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);

  }

  return(
    <>    <h1>Two counts..</h1>
    <p>These counts will run simultaneously</p>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    </>

  )

}

function MyButton({count,onClick}){
  return(
    <>
    <button onClick={onClick}>Count {count}</button>
    </>
  )
}