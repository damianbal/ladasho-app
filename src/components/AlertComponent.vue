<template>
    <div class="alert alert-success">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    }
}
</script>

<style>

</style>
