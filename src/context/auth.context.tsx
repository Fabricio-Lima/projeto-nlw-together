import React, { createContext, ReactNode, useState, useContext, useEffect } from 'react'
import { firebase, auth } from '../services/firebase'

type User = {
    id: string
    name: string
    avatar: string
}

type AuthContextType = {
    user: User | undefined
    signInWithGoogle: () => Promise<void>
}

type Props = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextType)

///// Hook
export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthContextProvider({ children }: Props) {
    
    const [ user, setUser ] = useState<User>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                const { displayName, photoURL, uid } = user
                
                if(!displayName || !photoURL) {
                    throw new Error('Missing Information from Google Account')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => unsubscribe()
        
    }, [])

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider)

        if(result.user){
            const { displayName, photoURL, uid } = result.user

            if(!displayName || !photoURL) {
                throw new Error('Missing Information from Google Account')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}