import Event from "./Event";
import listEvent from '../data/events.json'
import { Alert, CardGroup, Row } from "react-bootstrap";
import { useState } from "react";
export default function Events (){
    const [showAlert,setAlert] = useState(false)
    const modifAlert=()=>{
        setAlert(true);
        setTimeout(()=>setAlert(false),3000)
    }
    return(
     <>
      <Row xs={1} md={3} >
     
    { listEvent?.map((e,i) => {
        return <Event key={i} event={e} fnAlert={modifAlert}/>
     })}
     </Row>
     {showAlert &&
       <Alert  variant="success">
      You have booked an event
     </Alert>
     }
     </> 
    )
   
 }