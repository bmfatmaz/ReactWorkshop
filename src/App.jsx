import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './Components/ClassComp'
import FuntionComp from './Components/FunctionComp'
import Mounting from './lifeCycle/ClassComponents/Mounting'
import Events from './Components/Events'
function App() {

  return(
    <>
  <Events/>
    </>
  )
  // const [{color, background}, setColor]= useState({color:"red", background: "purple"});
//   useEffect(()=> console.log("mounting"),[])
//   useEffect(()=> console.log("mounting and updating"),[color])
//   useEffect(()=> console.log("chaque rerender"))
//   return (

// <div className="App">
// <input onChange= {e=>setColor(current => ({...current,color:e.target.value}
//  ))}/>
// <h1>My favorite color is {color}!</h1>
// </div>
// );

  // const [count, setCount] = useState(0)
  // const hello=()=>{
  //   return <p style={{color:"red"}}>Hello World!{10*3}</p>
  // }
  // var tab=[{nom:"Belhaj",prenom:"Fatma"},{nom:"Miniaoui",prenom:"Zahra"}]
  // return (
  //   <>
    
  //   <Mounting name="test"/>
  //   {hello()}
  //   <ul>
  //  {
  //   tab.map((e)=>{
  //    return <li> {e.nom} {e.prenom}</li>
  //   })
  //  } 

  //   </ul>
  //   <button onClick={()=>console.log("test")}>Click</button>
  //   <ClassComp name="Fatma"/>
  //   <FuntionComp test="testProps"/>
  //     {/* <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p> */}
  //   </>
  // )
}

export default App
