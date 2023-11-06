import React from 'react';
import cl from './index.module.sass';
import imgTrash from "../../photo/icons/trash.jpg";

type Operator = {
    name: string;
    level: number;
}

type TableProps = {
    selectedOperators: Operator[];
    onDeleteOperator: (operatorName: string) => void;
    onLevelChange: (operatorName: string, newLevel: number) => void;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: React.FC<TableProps> = ({ selectedOperators, onDeleteOperator, onLevelChange, isValid }) => {
    const generateOptions = (numberOfOptions: number) => {
        let options = [];

        for (let i = 1; i <= numberOfOptions; i++) {
            options.push(<option key={i} value={i}> {i} </option>);
        }

        return options;
    };

    const saveOperators = () => {
        isValid
            ? console.log(selectedOperators)
            : console.log("Error. Maybe your name has less than 3 characters")
    };

    return (
        <>
            <table className={cl.table}>
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedOperators.map(operator => (
                        <tr key={operator.name}>
                            <td>{operator.name}</td>
                            <td>
                                <select value={operator.level} className={cl.levelInput} onChange={e => onLevelChange(operator.name, parseInt(e.target.value))}>
                                    {generateOptions(selectedOperators.length)}
                                </select>
                            </td>
                            <td onClick={() => onDeleteOperator(operator.name)}>
                                <img src={imgTrash} alt="Delete" className={cl.deleteIcon} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={cl.btnSave} onClick={saveOperators}> Save </button>
        </>
    );
};

export default Table;