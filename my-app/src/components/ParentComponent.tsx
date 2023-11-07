import React, { useCallback, useState } from 'react'
import Table from './table/Table';
import OperatorsList from './multiselect/OperatorsList';
import InputForm from './inputForm/InputForm'

type Operator = {
    name: string;
    level: number;
};

const ParentComponent: React.FC = () => {
    const [selectedOperators, setSelectedOperators] = useState<Operator[]>([]);
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleOperatorClick = (operator: Operator) => {
        setSelectedOperators(prevSelectedOperators => {
            const isAlreadySelected = prevSelectedOperators.some(op => op.name === operator.name);
            if (isAlreadySelected) {
                return prevSelectedOperators.filter(op => op.name !== operator.name);
            } else {
                return [...prevSelectedOperators, operator];
            }
        });
    };

    const handleDeleteOperator = useCallback((operatorName: string) => {
        setSelectedOperators(prevSelectedOperators => {
            const deletedOperatorLevel = prevSelectedOperators.find(op => op.name === operatorName)?.level || 0;

            const updatedOperators = prevSelectedOperators.filter(op => op.name !== operatorName);

            return updatedOperators.map(op => {
                if (op.level > deletedOperatorLevel) {
                    return { ...op, level: op.level - 1 };
                }
                return op;
            });
        });
    }, []);

    const handleLevelChange = (operatorName: string, newLevel: number) => {
        setSelectedOperators(prevSelectedOperators =>
            prevSelectedOperators.map(op =>
                op.name === operatorName ? { ...op, level: newLevel } : op
            )
        );
    };

    return (
        <div>
            <InputForm isValid={isValid} setIsValid={setIsValid} />
            <OperatorsList onOperatorClick={handleOperatorClick} selectedOperators={selectedOperators} />
            <Table selectedOperators={selectedOperators} onDeleteOperator={handleDeleteOperator} onLevelChange={handleLevelChange} isValid={isValid} setIsValid={setIsValid} />
        </div>
    );
};

export default ParentComponent;



