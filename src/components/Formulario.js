import React, { useState } from 'react';
import '../stylesheets/Formulario.css'

function ReservationForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la información a un servidor o hacer algo con ella.
    console.log(`Reserva realizada por ${name} para ${guests} personas el ${date} a las ${time}.`);
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" placeholder= 'Name' value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" placeholder= 'Date' value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Hora:
        <input type="time" placeholder= 'Time' value={time} onChange={(event) => setTime(event.target.value)} />
      </label>
      <label>
        Invitados:
        <input type="number" placeholder= 'Guests' value={guests} onChange={(event) => setGuests(event.target.value)} />
      </label>
      <button type="submit">Reservar</button>
    </form>
  );
}

export default ReservationForm;
