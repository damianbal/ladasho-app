<template>
    <div>

 <model-toolbar :model="model"/>

    <base-card :title=model>



        <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th v-for="(col, key, idx) in attributes.slice(0,4)" scope="col" :key="idx">{{ col | capitalize | idsuffix }}</th>
      <th>Created at</th>
      <th class="text-center">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(modelResource, key1, idx1) in modelResources" :key="idx1">
      <td v-for="(col, key, idx) in attributes.slice(0,4)" :key="idx">{{ modelResource[col] }}</td>
      <td>{{ modelResource.created_at }}</td>
      <td class="text-center"><router-link :to="{ name: 'modelResourceEdit', params: { id: modelResource.id } }" class="btn btn-sm btn-primary"><i class="fas fa-pencil-alt"></i> Edit</router-link></td>
    </tr>
  </tbody>
        </table>
        
        <router-link class="btn btn-light" v-if="page > 1" :to="{ name: 'modelBrowse', params: { page: page - 1 } }">Previous </router-link>
        <router-link class="btn btn-light" v-if="page < maxPage" :to="{ name: 'modelBrowse', params: { page: page + 1 } }">Next ></router-link>
    </base-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseCard from "../../components/BaseCard"

export default {
    props: ["model", "page"],
    mounted() {
        this.fetchModel(this.model)
        this.fetchResources({ model: this.model, page: this.page })
    },
    watch: {
        '$route': function (to, from) {
                    this.fetchModel(this.model)
        this.fetchResources({ model: this.model, page: this.page })
          //  alert('XD: ' + this.model)
           // this.fetchResources({ model: this.model, page: this.page })
        }
    },
    methods: {
        ...mapActions(['fetchResources'])
    },
    computed: {
        ...mapGetters(['modelResources', 'maxPage']),
        cols() {
        
            return "col-sm-" + (12/this.modelResources[0].length) * 12;
        },
        attributes() {
            return [...Object.keys(this.modelResources[0])];
        }
    },
    components: { BaseCard }
}
</script>

<style>

</style>
