import React, { useEffect, useState } from 'react';
import cl from './index.module.sass';

type MultiselectProps = {
    operator: {
        name: string;
    };
    onClick: () => void;
    isSelected: any;
};

const Multiselect: React.FC<MultiselectProps> = ({ operator, onClick, isSelected }) => {
    const [isSelectedState, setIsSelected] = useState(isSelected);

    const toggleSelect = () => {
        setIsSelected(!isSelectedState);
        onClick();
    }

    const operatorClasses = `${isSelected ? cl.operatorSelected : ''} ${cl.operatorDefault}`;

    useEffect(() => {
        setIsSelected(isSelected);
    }, [isSelected]);

    return (
        <div className={cl.operators}>
            <div className={operatorClasses} onClick={toggleSelect}>
                {operator.name}
                {isSelected
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12" stroke="#3265B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 4L12 12" stroke="#3265B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Close">
                            <g id="Group 1919">
                                <path id="Vector" d="M7.99999 2.34315V13.6569" stroke="#6D717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_2" d="M2.34314 8H13.6568" stroke="#6D717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </g>
                    </svg>
                }
            </div>
        </div>
    );
};

export default Multiselect