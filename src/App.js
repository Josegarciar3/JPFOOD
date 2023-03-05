import './App.css';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import ReservationForm from './components/Formulario';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Productos />
      <h5>BOOK TABLE</h5>
      <ReservationForm />
      <Footer />

      
    </div>
  );
}

export default App;
