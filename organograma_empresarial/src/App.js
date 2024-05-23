import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const colaboradorIncluido = (colaborador) => {
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner/>
      <Form onIncluirColaborador={colaborador => colaboradorIncluido(colaborador)}/>
    </div>
  );
}

export default App;
