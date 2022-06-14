<template>
    <div>
        <h1>MIS BONOS</h1>
        <div class="list-bonds-options-searchbar-container">
            <v-text-field color="#00ADB5" placeholder="Buscar bono..." outlined style="height: 56px"></v-text-field>
            <BondActionBtn text="Añadir bono" route="/mybonds/add"></BondActionBtn>
        </div>
        <BondsListView></BondsListView>
    </div>
</template>

<script>

import BondsListView from '../components/bonds-list-view.vue';
import BondActionBtn from '@/components/bond-action-btn.vue';
export default {
    name: 'ListBondsOptions',
    components: {
        BondsListView,
        BondActionBtn
    }
}

</script>

<style scoped>

.list-bonds-options-searchbar-container {
    display: flex;
    width: 100%;
    gap: 20px;
}

</style>