import './SuspendedList.css';

export const SuspendedList = (props) =>{
    return (
        <div className="suspended-list">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}