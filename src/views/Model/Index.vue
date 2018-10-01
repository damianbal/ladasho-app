<template>

    <div>

        <model-toolbar :model="model"/>

  


    <div class="card shadow-sm">
        <div class="card-header">Relations</div>

<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item" v-for="(relation, idx) in modelRelations" :key="idx">
            {{ relation.name | capitalize }}
        </li>
        </ul>
    </div>
    </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseCard from "@/components/BaseCard"

export default {
    props: ["model"],
    mounted() {
        this.fetchModel(this.model)
    },
    methods: {
        ...mapActions(['fetchModel'])
    },
    computed: {
        ...mapGetters(['modelObj', 'modelRelations'])
    },
    watch: {
        '$route': function(to, from) {
            this.fetchModel(this.model)
        }
    },
    components: {
        BaseCard
    }
}
</script>

<style>

</style>
