import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import appService from "@/services/AppService"
import modelService from './services/ModelService';

export default new Vuex.Store({
  state: {
    model: { relations: [], attributes: [] }, // active model
    models: [], // all the models
    config: {}, // app config,
    resource: {},
    resources: [],
    maxPage: 0,
  },
  mutations: {
    SET_MODELS(state, payload) {
      state.models = payload 
    },
    SET_CONFIG(state, payload) {
      state.config = payload
    },
    SET_MODEL(state, payload) {
      state.model = payload
    },
    SET_RESOURCES(state, payload) {
      state.resources = payload
    },
    SET_MAXPAGE(state, payload) {
      state.maxPage = payload
    },
    SET_RESOURCE(state, payload) {
      state.resource = payload
    }
  },
  actions: {
    async createResource({ commit }, payload) {
      let data = payload.data
      let m = payload.model

      let resp = await modelService.createResource(m, data)

      alert('Created!')
    },
    async fetchModel({ commit }, payload) {
      let resp = await modelService.getRelations(payload)

      let relations = resp.data.relations 

      resp = await modelService.getAttributes(payload)

      let attributes = resp.data

      let model = { relations, attributes }

      commit('SET_MODEL', model)
    },
    async fetchModels({ commit }) {
      let resp = await modelService.getModels()

      let models = resp.data

      commit('SET_MODELS', models)
    },
    async fetchConfig({ commit }) {
      let resp = await appService.getConfig()

      let config = resp.data

      commit('SET_CONFIG', config)
    },
    async fetchResource({ commit }, payload) {
      let resp = await modelService.getResource(payload.model, payload.id)

      commit("SET_RESOURCE", resp.data.data)
    },
    async updateResource({ commit }, payload) {
      let resp = await modelService.updateResource(payload.model, payload.id, payload.data)
      return resp
    },
    async fetchResources({ commit }, payload) {
      let resp = await modelService.getResources(payload.model, payload.page)

      let last_page = 0

      if(typeof resp.data.meta != "undefined") {
        last_page = resp.data.meta.last_page
      }
      else {
        last_page = resp.data.last_page
      }

      commit('SET_MAXPAGE', last_page)
      let data = resp.data.data;

      commit('SET_RESOURCES', data)
    },
    async deleteResource({ commit }, resource_id) {
      let resp = await modelService.deleteResource(payload.model, payload.id)
      
    }
  },
  getters: {
    models(state) {
      return state.models
    },
    appName(state) {
      return state.config.app_name
    },
    appUrl(state) {
      return state.config.app_url
    },
    modelObj(state) {
      return state.model 
    },
    modelRelations(state) {
      return state.model.relations
    },
    modelAttributes(state) {
      return state.model.attributes
    },
    modelResources(state) {
      return state.resources
    },
    modelResource(state) {
      return state.resource
    },
    maxPage(state) {
      return state.maxPage
    }
  }
})
