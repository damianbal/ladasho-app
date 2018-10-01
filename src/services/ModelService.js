import axios from "axios";

class ModelService {

    app() {
        return localStorage.getItem("app_url")
    }

    /**
     * Return list of models
     */
    async getModels() {
        let url = this.app() + 'ladasho/models'

        return new Promise((resolve, reject) => {
            axios.get(url).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    async getRelations(model) {
        return new Promise((resolve, reject) => {
            axios.get(this.app() + "ladasho/model/" + model + "/relations").then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    async getAttributes(model) {
        return new Promise((resolve, reject) => {
            axios.get(this.app() + "ladasho/model/" + model + "/attributes").then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * Update resource with new data
     * 
     * @param {string} model 
     * @param {integer} id 
     * @param {object} data 
     */
    updateResource(model, id, data) {
        return new Promise((resolve, reject) => {
            let url = this.app() + 'resource/' + model + "/" + id

            axios.patch(url, data).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * Create new resource
     * 
     * @param {string} model 
     * @param {object} data 
     */
    async createResource(model, data) {
        return new Promise((resolve, reject) => {
            let url = this.app() + 'resource/' + model

            axios.post(url, data).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * Get relation
     * 
     * @param {string} model 
     * @param {integer} id 
     * @param {string} relation 
     */
    async getRelation(model, id, relation) {
        return new Promise((resolve, reject) => {
            let url = this.app() + "resource/" + model + "/" + relation

            axios.get(url).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * Create data relation
     * 
     * @param {string} model 
     * @param {integer} id 
     * @param {string} relation 
     * @param {object} data 
     */
    createRelationResource(model, id, relation, data) {

    }

    async getAllResources(model) {
        return new Promise((resolve, reject) => {
            axios.get(this.app() + "resource/" + model + "?page=1").then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * Get resource by ID
     * 
     * @param {string} model 
     * @param {integer} id 
     */
    async getResource(model, id) {
        return new Promise((resolve, reject) => {
            axios.get(this.app() + "resource/" + model + "/" + id).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    /**
     * 
     * @param {string} model 
     * @param {integer} page 
     */
    async getResources(model, page = 1) {
        return new Promise((resolve, reject) => {
            axios.get(this.app() + "resource/" + model + "?page=" + page).then(resp => {
                resolve(resp)
            }).catch(err => reject(err))
        })
    }

    deleteResource(model, id) {
        return axios.delete(this.app() + "/resource/" + model + "/" + id)
    }

}

const modelService = new ModelService()

export default modelService