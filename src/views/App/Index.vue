<template>
    <div>
        <div class="row mb-3">
            <div class="col-sm-12 text-right">
  <button @click="reset" class="btn btn-warning">Reset</button>
            </div>
        </div>

    <div class="card shadow">
        <div class="card-body">
            App Name: {{ appName }}

          
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
    computed: {
        ...mapGetters(['appName'])
    },
    methods: {
        reset() {
            //
            AuthService.signOut()

            this.$router.push({name:'home'})
        }
    }
}
</script>

<style>

</style>
