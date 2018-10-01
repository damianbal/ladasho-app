<template>
        <div class="row mb-3">
            <div class="col-sm-12 text-sm-right">
                <div class="btn-group">
                    <router-link class="btn btn-primary" :to="{ name: 'modelBrowse', params: { model, page: 1 } }"><i class="fas fa-eye"></i> Browse</router-link>
                    <router-link class="btn btn-primary" :to="{ name: 'modelCreate' }"><i class="fas fa-plus-square"></i> Create</router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        model: {
            type: String,
            default: "User",
            required: true
        }
    }
}
</script>

<style>

</style>
