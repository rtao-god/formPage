import React, { useState } from 'react';
import cl from "./index.module.sass";
import imgTrash from "../../photo/icons/trash.jpg";

type InputFormProps = {
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputForm: React.FC<InputFormProps> = ({ isValid, setIsValid }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setIsValid(value.length >= 3);
    };

    const handleDeleteClick = () => {
        setInputValue('');
        setIsValid(false);
    };

    return (
        <>
            <div className={cl.label}> Department name </div>
            <div className={cl.inputWrapper}>
                <input
                    placeholder='Booking department'
                    className={`${cl.input} ${!isValid ? cl.invalid : ''}`}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div onClick={handleDeleteClick} className={cl.delete}>
                    <img src={imgTrash} alt="Delete" />
                    <span> Delete </span>
                </div>
                {!isValid && <div className={cl.error}> The name must be at least 3 characters long. </div>}
            </div>
        </>
    );
}

export default InputForm;
