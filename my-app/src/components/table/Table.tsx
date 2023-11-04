import React from 'react';
import cl from './index.module.sass';
import imgTrash from "../../photo/icons/trash.jpg";

type Operator = {
    name: string;
}

type TableProps = {
    selectedOperators: Operator[];
    onDeleteOperator: (operatorName: string) => void;
}

const Table: React.FC<TableProps> = ({ selectedOperators, onDeleteOperator }) => {
    const generateOptions = () => {
        return Array.from({ length: selectedOperators.length }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
        ));
    };

    return (
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
                            <select className={cl.levelInput}>
                                {generateOptions()}
                            </select>
                        </td>
                        <td onClick={() => onDeleteOperator(operator.name)}>
                            <img src={imgTrash} alt="Delete" className={cl.deleteIcon} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
