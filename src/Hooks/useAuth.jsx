import { useContext } from "react"
import { AuthContext } from "../Context Provider/AuthProvider"

const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

export default useAuth;