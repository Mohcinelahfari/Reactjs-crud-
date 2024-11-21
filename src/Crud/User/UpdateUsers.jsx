import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from './Users';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUsers() {
    const context = useContext(UserContext);
    const FullName = useRef();
    const Country = useRef();
    const [currentUser, setCurrentUser] = useState(null);
    const { id } = useParams(); // Extract the user id from URL params
    const navigation = useNavigate()
    useEffect(() => {
        const user = context.user.find((user) => user.id === parseInt(id)); // Find user by id
        if (user) {
            setCurrentUser(user); // Set the current user to be updated
        } else {
            console.error('User not found');
        }
    }, [id, context.user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentUser) {
            // Call onUpdateUser from context with the updated user data
            context.onUpdateUser({
                payload: {
                    id: currentUser.id,
                    FullName: FullName.current.value,
                    Country: Country.current.value,
                },
            });
        }

        // Clear input fields
        FullName.current.value = '';
        Country.current.value = '';
        navigation('/')
    };

    if (!currentUser) {
        return <div>Loading...</div>; // Render loading until currentUser is set
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
    );
}

export default UpdateUsers;
