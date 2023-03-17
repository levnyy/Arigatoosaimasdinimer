import { BASE_URL, postJSON } from "."

const URL = `${BASE_URL}`

const AuthenticationAPI = {
    login(user){
        return postJSON(`${URL}/login`, {body: user})
    }
}
export default AuthenticationAPI