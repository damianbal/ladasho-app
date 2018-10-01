import axios from "axios";

class AuthService {
    signIn(url, email, password) {
        return new Promise((resolve, reject) => {
            localStorage.setItem("app_url", url)

            axios.post(url + "ladasho/auth/sign-in", {
                email,
                password
            }).then(resp => {
                if (resp.data.success) {
                    localStorage.setItem("token", resp.data.token)
                    console.log(resp)
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            }).catch(err => {
                alert('Error!')
                reject(err)
            })
        })
    }

    signOut() {
        localStorage.removeItem("app_url")
        localStorage.removeItem("token")
    }
}

const authService = new AuthService()

export default authService