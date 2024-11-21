import React, { createContext, useState } from 'react';
import TableUsers from './TableUsers';
import AddUser from './AddUser';
import UserLayout from './UserLayout';

export const UserContext = createContext({
    user: [],
    lastId: 0,
    onAddUser: () => null,
    onUpdateUser: () => null,
    onDeleteUser: () => null, // Function to handle delete
});

function Users() {
    const [users, setUsers] = useState([

    ]);
    const [lastId, setLastId] = useState(users.length);

    const onAddUser = (data) => {
        setUsers((prevState) => [...prevState, data.payload]);
        setLastId((prevState) => prevState + 1);
    };

    const onUpdateUser = (data) => {
        const { id, FullName, Country } = data.payload;
        setUsers((prevState) =>
            prevState.map((user) =>
                user.id === id ? { ...user, FullName, Country } : user
            )
        );
    };

    const onDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter((user) => user.id !== id));
    };

    return (
        <UserContext.Provider
            value={{
                user: users,
                lastId: lastId,
                onAddUser: onAddUser,
                onUpdateUser: onUpdateUser,
                onDeleteUser: onDeleteUser, // Provide the delete function
            }}
        >
            <UserLayout />
        </UserContext.Provider>
    );
}

export default Users;
