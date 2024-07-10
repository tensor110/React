import { useState } from 'react'

type UserAuth = {
  name: string,
  email: string
}

export const User = () => {
  const [user, setUser] = useState<UserAuth >({} as UserAuth)
  const handleLogin = () => {
    setUser({
      name: 'Ram',
      email: 'ram@gmail.com'
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  )
}
