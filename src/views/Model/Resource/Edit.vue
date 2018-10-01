<template>
<div>
 <model-toolbar :model="model"/>

    <div class="row mb-3">
        <div class="col-sm-12 text-right">
            <button @click="removeResource" class="btn btn-outline-danger shadow"><i class="far fa-trash-alt"></i> Remove</button>
        </div>
        </div>

    <base-card title="Edit Resource">
             <model-form submitTitle="Update" @submit="onSubmit" :form="form" :attributes=modelAttributes />
    </base-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import BaseCard from "../../../components/BaseCard"
import ModelForm from "../../../components/ModelForm"
import ModelService from "@/services/ModelService"

export default {
    props: ["model", "id"],
    async mounted() {
        await this.fetchResource({ model: this.model, id: this.id })
       // this.form = r.data;
        //alert('xd')
        this.form = this.modelResource;

    },
    watch: {
        '$route': async (to, from) => {
             await this.fetchResource({ model: this.model, id: this.id })
       // this.form = r.data;
        //alert('xd')
        this.form = this.modelResource;
        }
    },
    methods: {
        ...mapActions(['fetchResource', 'updateResource']),
        async onSubmit() {
            await this.updateResource({ model: this.model, 
                                 id: this.id,
                                 data: this.form })

            alert('updated!')
        },
       async removeResource() {
            let resp = await ModelService.deleteResource(this.model, this.id)

            if(resp.data.success) {
                alert('Removed!')
                this.$router.push({ name: 'modelBrowse', params: { model: this.model, id: 1 } })
            }
            else {
                alert('Error: Could not remove!')
            }
        }
    },
    components: {
        BaseCard, ModelForm
    },
    computed: {
        ...mapGetters(['modelAttributes', 'modelResource'])
    },
    data: () => {
        return {
            form: { title: "XD" }
        }
    }
}
</script>

<style>

</style>
