import './Form.css';
import Textfield from '../Textfield';
import SuspendedList from '../SuspendedList';
import Button from '../Button';

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

    const onSalvar = (event) => {
        event.preventDefault();
        console.log('Formulário submetido com êxito!');
    }

    return (
        <section className="formulario">
            <form onSubmit={onSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield label="Nome" placeholder="Digite o seu nome" required="true"/>
                <Textfield label="Cargo" placeholder="Digite o seu cargo" required="true"/>
                <Textfield label="Imagem" placeholder="Informe o endereço da imagem"/>
                <SuspendedList label="Time" itens={times} required="true"/>
                <Button texto="Criar card"/>
            </form>
        </section>
    )
};