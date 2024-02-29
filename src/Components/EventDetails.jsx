import React, { useEffect,useState } from "react";
import listEvent from "../data/events.json";
import { useParams } from "react-router-dom";
import api from "../service/api";

export default function EventDetails(props) {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    const fetchEvent = async () => {
      const ev = await api.getallEvents(id);
      setEvent(ev.data);
    };
    fetchEvent();
  }, []);

  // console.log(listEvent);
  // const event = listEvent.find((e) => {
  //  return e.name == nom;
  // });
  // console.log(event);
  return <>{event? <p>{event.name}</p> : <p>event not found</p>}</>;
}
