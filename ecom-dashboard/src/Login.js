import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/home");   // ab history ko replace kr diya navigate nai
        }
    }, [])
    return (
        <div>
            <h1> Login Page</h1>
        </div>
    )
}

export default Login
