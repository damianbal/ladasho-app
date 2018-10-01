<template>
    <div class="card mb-3">
        <div class="card-header">{{ title }}</div>

        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseCard",
    props: {
        title: {
            type: String,
            default: "Card"
        }
    }
}
</script>

<style>

</style>
