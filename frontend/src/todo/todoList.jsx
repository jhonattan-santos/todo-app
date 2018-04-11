import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}/>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}/>
                    <IconButton style={todo.done ? 'danger' : 'danger disabled'} icon='trash-o' 
                        onClick={() => todo.done ? props.handleRemove(todo) : false}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col" className="todoActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}