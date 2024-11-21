import React from 'react';
import { Link, Routes, Route, Outlet } from "react-router-dom";
import TableUsers from './TableUsers';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UpdateUsers from './UpdateUsers';

function UserLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/create">
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Update
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TableUsers />} />
        <Route path="/user/create" element={<AddUser />} />
        <Route path="/user/:id/update" element={<UpdateUsers />} />
      </Routes>
      
    </>
  );
}

export default UserLayout;
