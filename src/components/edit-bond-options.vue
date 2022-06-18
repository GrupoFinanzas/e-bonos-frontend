<template>
    <div class="edit-bond-options-container">
        <BondDetailsBar></BondDetailsBar>
        <BondDetailsView></BondDetailsView>
    </div>
</template>

<script>
import BondDetailsView from './bond-details-view.vue';
import BondDetailsBar from './bond-details-bar.vue';
undefined

export default {
    name: 'EditBondOptions',
    components: {
        BondDetailsView,
        BondDetailsBar
    }
}

</script>

<style scoped>
@media (max-width: 960px) {
    .edit-bond-options-container {
        padding: 8% 5%;
    }
}
</style>