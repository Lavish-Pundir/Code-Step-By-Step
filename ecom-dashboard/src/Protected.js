import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({ Component }) {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user-info");

        if (!user) {      // ab history ko replace kr diya navigate nai
            navigate("/register");
        }
    }, [navigate]);

    return <Component />;

}

export default Protected
