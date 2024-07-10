import { ThemeContextProvider } from "../components/context/ThemeContext"
import { Box } from "../components/context/Box"
import { UserContextProvider } from "../components/context/UserContext"
import { User } from "../components/context/User"


function Context() {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  )
}

export default Context
