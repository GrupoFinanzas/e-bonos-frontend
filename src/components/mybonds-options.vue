<template>
    <div>
        <div class="mybonds-options-searchbar-container">
            <v-text-field color="#00ADB5" placeholder="Buscar bono..." outlined style="height: 56px"></v-text-field>
            <BondActionBtn text="Añadir bono" route="/mybonds/add" :responsive="true"/>
        </div>
        <BondsListView></BondsListView>
    </div>
</template>

<script>

import BondsListView from '../components/bonds-list-view.vue';
import BondActionBtn from '@/components/bond-action-btn.vue';
export default {
    name: 'MyBondsOptions',
    components: {
        BondsListView,
        BondActionBtn
    }
}

</script>

<style scoped>

.mybonds-options-searchbar-container {
    display: flex;
    width: 100%;
    gap: 20px;
}

</style>