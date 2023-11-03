import React, { useState } from 'react'
import cl from './index.module.sass'
import SvgPlus from '../../photo/icons/Plus.svg'

type MultiselectProps = {
    operator: {
        name: string;
    }
}

const Multiselect: React.FC<MultiselectProps> = ({ operator }) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelect = () => setIsSelected(!isSelected);

    const operatorClasses = `${isSelected ? cl.operatorSelected : ''} ${cl.operatorDefault}`;



    return (
        <div className={cl.operators}>
            <div className={operatorClasses} onClick={toggleSelect}>
                {operator.name}
                {isSelected
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12" stroke="#3265B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 4L12 12" stroke="#3265B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Close">
                            <g id="Group 1919">
                                <path id="Vector" d="M7.99999 2.34315V13.6569" stroke="#6D717F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path id="Vector_2" d="M2.34314 8H13.6568" stroke="#6D717F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                    </svg>
                }
            </div>
        </div>
    )
}

export default Multiselect;
