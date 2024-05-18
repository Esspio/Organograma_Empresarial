import './Textfield.css';

export const Textfield = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}