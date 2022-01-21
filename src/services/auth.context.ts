import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({ user: null })

const AuthContextProvider = (props) => {
    const [ user, setUser ] = useState(null)

    return (
        <AuthContext.Provider value={{ user }}></AuthContext.Provider>
    )
}