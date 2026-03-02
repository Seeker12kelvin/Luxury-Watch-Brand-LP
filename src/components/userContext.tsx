import { createContext } from "react"

export interface UserContextType {
  displayProgress: number
  setDisplayProgress: React.Dispatch<React.SetStateAction<number>>
  opacity: number
}

const UserContext = createContext<UserContextType | null>(null)

export default UserContext