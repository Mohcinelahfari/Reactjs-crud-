import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './Users'
import { useParams } from 'react-router-dom'

function UpdateUsers() {
    const context = useContext(UserContext)
    const FullName = useRef()
    const Country = useRef()
    const [currentUser, setCurrentUser] = useState(null)
    const params = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Ensure updated values are passed correctly
        context.onUpdateUser({
            id: currentUser.id,
            FullName: FullName.current.value,
            Country: Country.current.value,
        })

        // Clear form fields after submission
        FullName.current.value = ''
        Country.current.value = ''
    }

    useEffect(() => {
        const { id } = params
        const user = context.user.find((user) => user.id === parseInt(id)) // Find the user by ID
        if (user) {
            setCurrentUser(user)
        } else {
            console.error('User not found')
        }
    }, [params, context.user])

    if (!currentUser) {
        return <div>Loading...</div> // Render loading until currentUser is set
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
                {/* User ID */}
                <div>
                    <label>User ID</label>
                    <h1>{currentUser.id}</h1>
                </div>

                {/* Full Name Input */}
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        ref={FullName}
                        defaultValue={currentUser.FullName}
                    />
                </div>

                {/* Country Select */}
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <select
                        className="form-select"
                        id="country"
                        ref={Country}
                        defaultValue={currentUser.Country}
                    >
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UpdateUsers
