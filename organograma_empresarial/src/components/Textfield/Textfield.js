import './Textfield.css';

export const Textfield = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required}></input>
        </div>
    )
}