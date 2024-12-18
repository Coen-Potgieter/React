
export default function Input({ type, inputs, onInputChange, children }) {
    return (
        <div>
            <label>{children}</label>
            <input 
                type="number" 
                required 
                value={(inputs[type] != 0) ? inputs[type] : ""} 
                onChange={(event) => onInputChange(type, event)}/>
        </div>
    );
}
