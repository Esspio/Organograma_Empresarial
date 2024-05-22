import './SuspendedList.css';

export const SuspendedList = (props) =>{
    return (
        <div className="suspended-list">
            <label>{props.label}</label>
            <select 
                required={props.required}
                value={props.valor}
                onChange={event => props.onAlteracao(event.target.value)}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}