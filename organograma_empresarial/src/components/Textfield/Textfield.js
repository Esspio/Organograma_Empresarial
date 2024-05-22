import './Textfield.css';

export const Textfield = (props) => {

    const onDigitado = (event) => {
        props.onAlteracao(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required} onChange={onDigitado}
                value={props.valor}></input>
        </div>
    )
}