import React, { useCallback, useState } from 'react'
import Table from './table/Table';
import OperatorsList from './multiselect/OperatorsList';

type Operator = {
    name: string;
};

const ParentComponent: React.FC = () => {
    const [selectedOperators, setSelectedOperators] = useState<Operator[]>([]);
    const [isSelected, setIsSelected] = useState(false);

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
        setSelectedOperators(prevSelectedOperators =>
            prevSelectedOperators.filter(op => op.name !== operatorName)
        );
    }, []);

    return (
        <div>
            <OperatorsList onOperatorClick={handleOperatorClick} selectedOperators={selectedOperators} />
            <Table selectedOperators={selectedOperators} onDeleteOperator={handleDeleteOperator} />
        </div>
    );
};

export default ParentComponent;
