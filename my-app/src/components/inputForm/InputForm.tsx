import React, { useState } from 'react';
import cl from "./index.module.sass";
import imgTrash from "../../photo/icons/trash.jpg";

type InputFormProps = {
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputForm: React.FC<InputFormProps> = ({ isValid, setIsValid }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTouched(true);
        const value = e.target.value;
        setInputValue(value);
        setIsValid(value.length >= 3);
    };

    const handleDeleteClick = () => {
        setInputValue('');
        setIsValid(false);
        setIsTouched(false);
    };

    return (
        <>
            <div className={cl.label}> Department name </div>
            <div className={cl.inputWrapper}>
                <input
                    placeholder='Booking department'
                    className={`${cl.input} ${!isValid && isTouched ? cl.invalid : ''}`}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div onClick={handleDeleteClick} className={cl.delete}>
                    <img src={imgTrash} alt="Delete" />
                    <span> Delete </span>
                </div>
                {!isValid && isTouched && <p className={cl.error}> The name must be at least 3 characters long. </p>}
            </div>
        </>
    );
}


export default InputForm;
