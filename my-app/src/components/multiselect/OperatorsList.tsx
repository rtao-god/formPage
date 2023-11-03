import React, { useState } from 'react'
import Multiselect from './Multiselect'
import cl from './index.module.sass'

type Operator = {
    name: string;
}

export default function OperatorsList() {
    const [operators, setOperators] = useState<Operator[]>([
        { name: "Harry" },
        { name: "Jake" }
    ])

    return (
        <div className={cl.operatorWrapper}>
            {operators.map(operator =>
                <Multiselect operator={operator} />
            )}
        </div>
    )
}


