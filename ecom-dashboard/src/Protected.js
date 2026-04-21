import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({Component}) {
    
    const navigate = useNavigate();

        useEffect(() => {
            if (!localStorage.getItem('user-info')) {
                navigate("/register");   // ab history ko replace kr diya navigate nai
            }
        }, [])
        
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected
