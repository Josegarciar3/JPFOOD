import './App.css';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import ReservationForm from './components/Formulario';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Productos />
      <h3>BOOK TABLE</h3>
      <ReservationForm />

      
    </div>
  );
}

export default App;
