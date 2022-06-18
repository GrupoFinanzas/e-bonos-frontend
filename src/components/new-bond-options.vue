<template>
    <div class="new-bond-options-container">
        <BondDetailsBar></BondDetailsBar>
        <BondDetailsView></BondDetailsView>
    </div>
</template>

<script>
import BondDetailsView from './bond-details-view.vue';
import BondDetailsBar from './bond-details-bar.vue';
undefined

export default {
    name: 'NewBondOptions',
    components: {
        BondDetailsView,
        BondDetailsBar
    }
}

</script>

<style scoped>
@media (max-width: 960px) {
    .new-bond-options-container {
        padding: 8% 5%;
    }
}
</style>