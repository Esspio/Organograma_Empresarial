import './Form.css';
import Textfield from '../Textfield';
import SuspendedList from '../SuspendedList';
import Button from '../Button';
import { useState } from 'react';

export const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSalvar = (event) => {
        event.preventDefault();
        console.log('Formulário submetido com êxito!');
        console.log('Dados inseridos: '       + 
                     '\n - Nome: '   + nome   +
                     '\n - Cargo: '  + cargo  +
                     '\n - Imagem: ' + imagem +
                     '\n - Time: '   + time);
    }

    return (
        <section className="formulario">
            <form onSubmit={onSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield 
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required="true"
                    valor={nome}
                    onAlteracao={valor => setNome(valor)}/>

                <Textfield 
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required="true"
                    valor={cargo}
                    onAlteracao={valor => setCargo(valor)}/>
                
                <Textfield 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    onAlteracao={valor => setImagem(valor)}/>

                <SuspendedList 
                    label="Time"
                    itens={times}
                    valor={time}
                    onAlteracao={valor => setTime(valor)}
                    required="true"/>

                <Button 
                    texto="Criar card"/>
            </form>
        </section>
    )
};