import { createContext } from "react"

export interface UserContextType {
  displayProgress: number
  setDisplayProgress: React.Dispatch<React.SetStateAction<number>>
  opacity: number,
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  selectedImage: string | undefined,
  setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  payUp: (image: string | undefined) => void,
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export default UserContext