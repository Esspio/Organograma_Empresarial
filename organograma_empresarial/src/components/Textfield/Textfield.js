import './Textfield.css';

export const Textfield = (props) => {

    let valor = '';
    const onDigitado = (event) => {
        valor = event.target.value;
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required} onChange={onDigitado}
                value={valor}></input>
        </div>
    )
}