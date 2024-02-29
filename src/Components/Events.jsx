import Event from "./Event";
//import listEvent from "../data/events.json";
import { Alert, CardGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../service/api";
export default function Events(props) {
  const [showAlert, setAlert] = useState(false);
  const [listEvent, setListEvent] = useState([]);

  const [showWelcome, setWelcome] = useState(false);
  //récuperer l'id
  const { id } = useParams();

  console.log(id);
  //query params
  const [name, setName] = useSearchParams({ name: "" });
  console.log(name.get("name"));
  const modifAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };
  const deleteEvent = async (id) => {
   await api.deleteEvent(id);
   setListEvent(listEvent.filter((e)=>e.id!=id));
  };
  useEffect(() => {
    const fetchList = async () => {
      const events = await api.getallEvents();
      setListEvent(events);
    };
    fetchList();
  }, []);
  // useEffect(() => {
  //   setWelcome(true);
  //   setTimeout(() => setWelcome(false), 3000);
  //   return () => {
  //     console.log("mounting");
  //   };
  // }, []);
  return (
    <>
      {showWelcome && <Alert variant="success">Welcome</Alert>}
      <Row xs={1} md={3}>
        {listEvent.data?.map((e, i) => {
          return <Event key={i} delete={deleteEvent} event={e} fnAlert={modifAlert} />;
        })}
      </Row>
      {showAlert && <Alert variant="success">You have booked an event</Alert>}
    </>
  );
}
