import { LoggedIn } from "../components/state/01useState"
import {User} from '../components/state/02TypeAssertion'
import { Counter } from "../components/state/03useReducer"

function State() {
  return (
    <div>
      <LoggedIn />
      <User />
      <Counter />
    </div>
  )
}

export default State
