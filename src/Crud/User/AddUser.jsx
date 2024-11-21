import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './Users'
import { useNavigate } from 'react-router-dom'

function AddUser({onAddUser, lastId = 0}) {
    const context = useContext(UserContext)
    const FullName = useRef()
    const Country = useRef()
    const navigation = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(Country.current.value)

        context.onAddUser ({
            payload : {
                FullName : FullName.current.value,
                Country : Country.current.value,
                id : context.lastId+1
            }
        })
        FullName.current.value=''
        Country.current.value=''
        navigation('/')
    }
   return (
    <div className="container mt-4">
      <h2 className="mb-4">Bootstrap Form</h2>
      <form onSubmit={handelSubmit}>
        {/* Full Name Input */}
        <div>
            <label htmlFor="">Id Users</label>
            <h1>{context.lastId+1}</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter your full name"
            ref={FullName}
          />
        </div>



        {/* Country Select */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select className="form-select" id="country" ref={Country}>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUser