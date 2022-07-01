<template>
    <div>
        <div class="mybonds-options-searchbar-container">
            <v-text-field color="#00ADB5" placeholder="Buscar bono..." outlined style="height: 56px"></v-text-field>
            <BondActionBtn text="Añadir bono" :route="routeToAddBond" :responsive="true"/>
        </div>
        <BondsListView></BondsListView>
    </div>
</template>

<script>

import BondsListView from '../components/bonds-list-view.vue';
import BondActionBtn from '@/components/bond-action-btn.vue';
import BondsApiService from '@/services/bonds-api.service';
export default {
    name: 'MyBondsOptions',
    components: {
        BondsListView,
        BondActionBtn
    },
    data() {
        return {
            bonds: [],
            userId: this.$route.params.userId,
            routeToAddBond: '',
        }
    },
    methods: {
        retrieveBondsByUserId(id) {
            BondsApiService.getAllByUserId(id).then(
                (bonds) => {
                    this.bonds = bonds.data;
                    // console.log(this.bonds);
                }
            );
        }
    },
    created() {
        this.retrieveBondsByUserId(this.userId);
        this.routeToAddBond = `/mybonds/${this.userId}/add`;
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