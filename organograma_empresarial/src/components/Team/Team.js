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
            <Collaborator />
        </section>
    )
}