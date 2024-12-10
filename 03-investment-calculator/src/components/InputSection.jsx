import Input from "./Input.jsx";

export default function InputSection({ inputTypes, currValues, onInputChange }) {

    return (
        <>
            <span className="input-group">
                <Input type={inputTypes[0]}
                    inputs={currValues} 
                    onInputChange={onInputChange}>
                    Initial Investment
                </Input>
                <Input type={inputTypes[1]} 
                    inputs={currValues} 
                    onInputChange={onInputChange}>
                    Annual Investment
                </Input>
            </span>
            <span className="input-group">
                <Input type={inputTypes[2]} 
                    inputs={currValues} 
                    onInputChange={onInputChange}>
                    Expected Return
                </Input>
                <Input type={inputTypes[3]} 
                    inputs={currValues} 
                    onInputChange={onInputChange}>
                    Duration
                </Input>
            </span>
        </>
    );

}
