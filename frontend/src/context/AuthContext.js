import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (event) =>{
        event.preventDefault()
        console.log('it is working')
        let response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':event.target.username.value, 'password':event.target.password.value})
        })
        let data = await response.json()
        console.log('data', data)
    }

    let contextData = {
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}