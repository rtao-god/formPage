import React, { useState } from 'react';
import cl from './index.module.sass';
import Multiselect from './Multiselect';

type Operator = {
    name: string;
    level: number;
}

type OperatorsListProps = {
    onOperatorClick: (operator: Operator) => void;
    selectedOperators: any;
}

const OperatorsList: React.FC<OperatorsListProps> = ({ onOperatorClick, selectedOperators }) => {
    const [operators, setOperators] = useState<Operator[]>([
        { name: "Harry", level: 1 },
        { name: "Jake", level: 1 },
        { name: "Maria", level: 1 },
        { name: "Lisa", level: 1 },
        { name: "Pavel", level: 1 },
        { name: "Rtao", level: 1 },
    ])

    const isOperatorSelected = (operatorName: string) => {
        return selectedOperators.some((op: Operator) => op.name === operatorName);
    };

    return (
        <div className={cl.operatorWrapper}>
            {operators.map(operator =>
                <Multiselect
                    key={operator.name}
                    operator={operator}
                    isSelected={isOperatorSelected(operator.name)}
                    onClick={() => onOperatorClick(operator)}
                />
            )}
        </div>
    );
};


export default OperatorsList