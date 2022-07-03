import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }) => {

    const isAuth = useSelector(state => state.AuthReducer.isAuth)

    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return (
        <div>RequireAuth</div>
    )
}
