import { createContext, useContext, useState } from "react"

const mockUsers = [
  {email: 'john@example.com', password: 'password'},
  {email: 'cata@example.com', password: 'coderhouse'},
  {email: 'rodri@example.com', password: 'asdf'}
]

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({
    loggedIn: true,
    userId: null,
  })

  const login = (values) => {
    const {email, password} = values

    const match = mockUsers.find( (user) => (user.email === email && user.password === password) )
    
    if(match) {
      setAuth({
        loggedIn: true,
        userId: match.email
      })
    } else {
      alert('user do not match')
    }
  }

  const logOut = () => {
    setAuth({
      loggedIn: false,
      userId: null
    })
  }


  return (

    <AuthContext.Provider value={{auth, login, logOut}}>
      {children}
    </AuthContext.Provider>

  )
}