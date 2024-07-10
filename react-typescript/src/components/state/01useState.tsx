import { useState } from 'react'

type AuthUser = {
  name: string,
  email: string
}

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)  //useState  with future value
  const handleLogin = () => {
    setIsLoggedIn(true)
    setUser({
      name: 'Ram',
      email: 'ram@gamil.com'
    })
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
      <div>user name is {user?.name}</div>
      <div>user name is {user?.email}</div>
    </div>
  )
}