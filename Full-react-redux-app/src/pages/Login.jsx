import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from "../redux/auth/action"
import { USER_LOGIN_SUCCESS } from '../redux/auth/actionTypes'

export const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("eve.holt@reqres.in")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            dispatch(login({ email, password })).then((r) => {
                if (r.type === USER_LOGIN_SUCCESS) {
                    navigate("/")
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Email</label>
                    <input type="email" placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>User Password</label>
                    <input type="password" placeholder='Enter password' onChange={e => setPassword(e.target.value)} value={password} />
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
