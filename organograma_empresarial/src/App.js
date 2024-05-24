import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const colaboradorIncluido = (colaborador) => {
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner/>
      <Form times={times.map(time => times.nome)}
            onIncluirColaborador={colaborador => colaboradorIncluido(colaborador)}/>
      
      {times.map(
        time => <Team key={time.nome}
                      nome={time.nome}
                      corPrimaria={time.corPrimaria}
                      corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
