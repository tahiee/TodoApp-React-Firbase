import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProtected = ({children}) => {
    const [isUser, setIsUser] = useState(false)
    return (
        <UserContext.Provider value={{ isUser, setIsUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProtected