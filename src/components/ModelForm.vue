<template>
    <form @submit.prevent="$emit('submit')">
        <div v-for="(attribute, aid) in attributes" :key="aid">
            <div class="form-group">
                <label>{{ attribute | capitalize | idsuffix }}</label>
                <input class="form-control" v-model="form[attribute]" :placeholder="attribute | capitalize">
            </div>
        </div>

        <div class="text-center">
            <button class="btn btn-success">{{ submitTitle }}</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        form: {
            type: Object,
            required: false, 
            default: function() {
                return {}
            }
        },
        attributes: {
            type: Array,
            required: true,
            default: function() { 
                return [];
            }
        },
        values: {
            type: Array,
            required: false,
            default: function() {
                return null;
            }
        },
        submitTitle: {
            type: String,
            required: true,
            default: "Create"
        }
    },
}
</script>

<style>

</style>
