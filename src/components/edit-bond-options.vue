<template>
    <div class="edit-bond-options-container">
        <BondDetailsBar v-on:moneyChange="onMoneyChange"></BondDetailsBar>
        <BondDetailsView :isDolar="isDolar" :editing="true"></BondDetailsView>
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
    },
    data: () => ({
        isDolar: false,
    }),
    methods: {
        onMoneyChange(isChecked) {
            this.isDolar = isChecked;
        },
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