import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Event(props) {
    const[e,setEvent]=useState(props.event)
    const bookEvent=()=>{
        props.fnAlert();
        setEvent((pe)=>({...pe,
            nbTickets: pe.nbTickets-1,
            nbParticipants:pe.nbParticipants+1}))
    }

    
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`images/${e.img}`} />
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          
          <Card.Text>Price: {e.price}</Card.Text>
          <Card.Text>Number of tickets: {e.nbTickets}</Card.Text>
          <Card.Text>Number of participants: {e.nbParticipants}</Card.Text>  
          
          <Button onClick={bookEvent}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
