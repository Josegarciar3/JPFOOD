import React, { useState } from 'react';
import '../stylesheets/Formulario.css'
import { Form, Button } from 'react-bootstrap';

function ReservationForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí es donde enviaríamos los datos de reserva a una API o algún otro destino de almacenamiento
    console.log('Nombre:', name);
    console.log('Número de teléfono:', phoneNumber);
    console.log('Fecha:', date);
    console.log('Hora:', time);
    console.log('Tamaño del grupo:', partySize);
  };

  return (
    <div className="formu d-inline-block justify-content-center align-items-center  ">   
        <Form  onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Número de teléfono:</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Fecha:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTime">
            <Form.Label>Hora:</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPartySize">
            <Form.Label>Tamaño del grupo:</Form.Label>
            <Form.Control
              type="number"
              value={partySize}
              onChange={(event) => setPartySize(event.target.value)}
            />
          </Form.Group>

          <Button className="envio-boton" variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
    </div>     
  );    
}

export default ReservationForm;

