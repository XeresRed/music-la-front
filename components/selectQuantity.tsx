import { FormEvent, useState } from "react";

interface ISelectQuantityProps {
    value: number,
    updateInput: (value: string) => void;
    validation: (value: string) => string;
}

export default function SelectQuantity({value, updateInput, validation}: ISelectQuantityProps) {
    const [showError, setshowError] = useState<string>("");

    const handleChange = (value:  FormEvent<HTMLInputElement>) => {
        if (value.currentTarget.value === "") {
            setshowError("Debe ingresar una cantidad valida");
            return;
        }
        const validate = validation(value.currentTarget.value);
        
        if (validate) {
            setshowError(validate);
            return;
        }

        setshowError("");
        updateInput(value.currentTarget.value)

    }

    return (
        <div style={{display:"flex", flexDirection: 'column'}}>
            <input type="number" min={0} defaultValue={value} onInput={handleChange} className="quantity" />
            {showError && <small style={{color: 'red'}}>{showError}</small>}
        </div>
    )
}