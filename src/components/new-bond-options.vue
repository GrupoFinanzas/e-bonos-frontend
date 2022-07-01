<template>
    <div class="new-bond-options-container">
        <BondDetailsBar v-on:moneyChange="onMoneyChange"></BondDetailsBar>
        <BondDetailsView :isDolar="isDolar" :editing="false"></BondDetailsView>
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
    },
    data: () => ({
        isDolar: false,
    }),
    methods: {
        onMoneyChange(isChecked) {
            this.isDolar = isChecked;
        },
    },
}

</script>

<style scoped>
@media (max-width: 960px) {
    .new-bond-options-container {
        padding: 8% 5%;
    }
}
</style>