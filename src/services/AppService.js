import axios from "axios";
import Service from "./Service";

class AppService extends Service {

    async getConfig() {
        return new Promise((resolve, reject) => {
            this.get("ladasho/app/config").then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })

        /*
        return new Promise((resolve, reject) => {
            axios.get(localStorage.getItem("app_url") + "ladasho/app/config").then(resp => {
                resolve(resp)
            }).catch(err => {
                console.error('ERROR', err)
                reject(err)
            })
        })*/
    }

}

const appService = new AppService()

export default new AppService()