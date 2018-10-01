<template>
    <div>
         <model-toolbar :model="model"/>
        <base-card :title="cardTitle">
            <model-form submitTitle="Create" @submit="onSubmit" :form="form" :attributes=modelAttributes />
        </base-card>
    </div>
</template>

<script>
import BaseCard from "../../components/BaseCard"
import ModelForm from "../../components/ModelForm"

import { mapGetters, mapActions } from "vuex"

export default {
    props: ["model"],
    components: {
        BaseCard, ModelForm
    },
    computed: {
        cardTitle() {
            return "Create " + this.model
        },
        ...mapGetters(['modelAttributes']),
    },
    methods: {
        async onSubmit(e) {
            let r = await this.createResource({ model: this.model, 
                                 data: this.form })
        
            this.$router.push({ name: 'modelBrowse', params: { model: this.model, page: 1 } })
        },
        ...mapActions(['createResource'])
    },
    mounted() {
        this.modelAttributes.forEach(ma => {
            this.form[ma] = 'bla'
        })
    },
    watch: {
        '$route': (from, to) => {
        this.modelAttributes.forEach(ma => {
            this.form[ma] = 'bla'
        })
        }
    },
    data: () => {
        return {
            form:{}
        }
    }
}
</script>

<style>

</style>
