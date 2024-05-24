import { Collaborator } from '../Collaborator/Collaborator';
import './Team.css';

export const Team = (props) => {

    const styleBackgroundColorTeam = {backgroundColor: props.corSecundaria};
    const styleBorderColorTeam = {borderColor: props.corPrimaria};

    return (
        <section className="team" style={styleBackgroundColorTeam}>
            <h3 style={styleBorderColorTeam}>
                {props.nome}
            </h3>
            
            <div className='collaborators'>
                {props.colaboradores.map(colaborador => <Collaborator
                                                                nome={colaborador.nome}
                                                                cargo={colaborador.cargo}
                                                                imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}