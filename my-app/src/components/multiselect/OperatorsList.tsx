import React, { useState } from 'react';
import cl from './index.module.sass';
import Multiselect from './Multiselect';

type Operator = {
    name: string;
}

type OperatorsListProps = {
    onOperatorClick: (operator: Operator) => void;
    selectedOperators: any;
}

const OperatorsList: React.FC<OperatorsListProps> = ({ onOperatorClick, selectedOperators }) => {
    const [operators, setOperators] = useState<Operator[]>([
        { name: "Harry" },
        { name: "Jake" },
        { name: "Maria" },
        { name: "Lisa" },
        { name: "Pavel" },
        { name: "Rtao" },
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