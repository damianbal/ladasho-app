import axios from "axios";

export default class Service {

    app() {
        return localStorage.getItem("app_url")
    }

    get(url) {
        return axios.get(this.app() + url)
    }

    post(url, data) {
        return axios.post(this.app() + url, data)
    }

    put(url, data) {
        return axios.put(this.app() + url, data)
    }

    patch(url, data) {
        return axios.patch(this.app() + url, data)
    }
    
    delete(url) {
        return axios.delete(this.app() + url)
    }

}