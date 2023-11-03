import React from 'react'
import cl from "./index.module.sass"
import imgTrash from "../../photo/icons/trash.jpg"

export default function Table() {
    return (
        <table className={cl.table}>
            <thead>
                <tr>
                    <th> Operator </th>
                    <th> Level </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Harry </td>
                    <td> <input /> </td>
                    <td> <img src={imgTrash} alt="" /> </td>
                </tr>
                <tr>
                    <td> Jake </td>
                    <td> <input /> </td>
                    <td> <img src={imgTrash} alt="" /> </td>
                </tr>
            </tbody>
        </table>
    )
}
