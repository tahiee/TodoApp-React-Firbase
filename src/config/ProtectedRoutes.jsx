import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { Typography } from '@mui/material';

const ProtectedRoutes = ({ component }) => {
    const [isUser, setIsUser] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')
                return
            }
            setIsUser(true)
        })

    }, [])
    return (
        isUser ?
            component : <Typography variant="h1" color="initial" sx={{textAlign:"center",color:"#455a64"}}>Loading...</Typography>
    )
}

export default ProtectedRoutes