// 01 -> useState

// import React, { useState } from 'react'

// // You can only use hooks inside function components.
// // Every time your component runs, your hooks must run in the exactly same order. It means you can't use useState inside conditionals and functions for example. They can't be nested.

// // function countInitial() {
// //   return { count: 0, theme: 'blue' }
// // }

// function App() {
//   // const [count, setCount] = useState(0) // it set the count value every time your component re-render
//   // const [state, setState] = useState(() => countInitial()) // it set the count value only the very first time the component render
//   // const { count, theme } = state
//   const [count, setCount] = useState(() => 0) 
//   const [theme, setTheme] = useState(() => 'blue') 

//   function decrementCount() {
//     // setState(prevState => {
//     //   return { ...prevState, count: prevState.count - 1 }
//     // }) 
//     // setCount(count - 1) // not a good way to update the state (it can happen that the value count doesn't have the expected value)
//     setCount(prevCount => prevCount - 1)
//   }
  
//   function incrementCount() {
//     setCount(prevCount => prevCount + 1)
//     setTheme('red')
//   }

//   return (
//     <>
//       <h1> React Hooks </h1>
//       <h2> Hook 01: useState </h2>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   );
// }

// export default App;

// 02 -> useEffect
// import React, { useState, useEffect } from 'react'
// function App() {
//   // useEffect execute everytime the app renders
//   // useEffect(() => { }, []) // on mount

//   // const [resourceType, setResourceType] = useState(() => 'posts')
//   // const [items, setItems] = useState(() => [])
//   // will execute when resourceType changes
//   // useEffect(() => {
//   //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   //     .then(response => response.json())
//   //     .then(json => setItems(json))
//   // }, [resourceType])

//   const [windowWidth, setWindowWidth] = useState(() => window.innerWidth)

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize)
//     // once the component is cleaned up ('unMount'), the use effect returns the function below
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <>
//       <h1> React Hooks </h1>
//       <h2> Hook 02: useEffect </h2>
//       {/* <div>
//         <button onClick={() => setResourceType('posts')}>Posts</button>
//         <button onClick={() => setResourceType('users')}>Users</button>
//         <button onClick={() => setResourceType('comments')}>Comments</button>
//       </div>
//       <h3>{resourceType}</h3>
//       {items.map(item => {
//         return <pre key={item.id}>{JSON.stringify(item)}</pre>
//       })} */}
//       <div>
//         {windowWidth}
//       </div>
//     </>
//   );
// }

// export default App;

// 03 -> useContext
import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      {/* <ClassContextComponent /> */}
    </ThemeProvider>
  )
}

