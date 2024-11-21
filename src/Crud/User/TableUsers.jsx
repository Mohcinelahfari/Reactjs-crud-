import React, { useContext } from 'react'
import { UserContext } from './Users'
import { Link } from 'react-router-dom'

const TableUsers = () => {
    const context = useContext(UserContext)

    const handleDelete = (id) => {
        context.onDeleteUser(id) // Call onDeleteUser from context
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Country</th>
                        <th>Actions</th> {/* Actions column for Update and Delete */}
                    </tr>
                </thead>
                <tbody>
                    {context.user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.FullName}</td>
                            <td>{user.Country}</td>
                            <td>
                                {/* Update Button */}
                                <Link to={`/user/${user.id}/update`} className="btn btn-warning">
                                    Update
                                </Link>
                                {/* Delete Button */}
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="btn btn-danger ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableUsers
