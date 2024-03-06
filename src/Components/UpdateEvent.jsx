import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { editEvent, getallEvents } from "../service/api";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ev, setEvent] = useState({});
  useEffect(() => {
    console.log(id);
    const fetchEvent = async () => {
      const event = await getallEvents(id);
      setEvent(event.data);
    };
    fetchEvent();
  }, []);

  const onInputChange = (e) => {
    setEvent({
      ...ev,
      [e.target.name]: e.target.value,
    });
  };

  const onFileChange = (e) => {
    if (e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      setEvent({
        ...ev,
        img: fileName,
      });
    }
  };

  const editE = () => {
    const editEv = async () => {
      await editEvent(ev.id, ev);
      navigate("/events");
    };
    editEv();
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Modify {ev.name}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={ev.name}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
            value={ev.description}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={ev.price}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={ev.nbTickets}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Participants</Form.Label>
          <Form.Control
            type="number"
            name="nbParticipants"
            value={ev.nbParticipants}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={(e) => onFileChange(e)}
          />
        </Form.Group>
        <Button variant="primary" onClick={editE}>
          Edit
        </Button>
        <Button variant="secondary">Cancel</Button>
      </Form>
    </Container>
  );
}
