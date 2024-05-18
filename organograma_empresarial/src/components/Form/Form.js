import './Form.css';
import Textfield from '../Textfield';
import SuspendedList from '../SuspendedList';

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

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield label="Nome" placeholder="Digite o seu nome"/>
                <Textfield label="Cargo" placeholder="Digite o seu cargo"/>
                <Textfield label="Imagem" placeholder="Informe o endereço da imagem"/>
                <SuspendedList label="Time" itens={times}/>
            </form>
        </section>
    )
};