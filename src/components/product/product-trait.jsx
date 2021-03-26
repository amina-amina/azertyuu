import React from 'react'

export default function ProductTrait(props) {
    return (
        <tr>
            <td><img src={props.datadata.avatar} alt /></td>
            <td>{props.datadata.title}</td>
            <td>{props.datadata.quantity}</td>
            <td>{props.datadata.price}</td>
            <td>{props.datadata.categorie}</td>
            <td>{props.datadata.description}</td>
            <td>
                <button
                onClick={()=>props.remove(props.datadata.id)}
                 type="button" className="btn btn-outline-danger p-2 "><i className="fas fa-trash-alt" /></button>
                <button 
                 onClick={()=>props.edit(props.datadata)}
                type="button" className="btn btn-outline-warning p-2 "><i className="fas fa-edit" />
                </button>
            </td>
        </tr>

    )
}
