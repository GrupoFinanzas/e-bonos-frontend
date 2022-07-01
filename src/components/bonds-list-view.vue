<template>
    <div class="bonds-list-view-container">
        <div v-if="bonds.length <= 0">No tiene bonos disponibles</div>
        <BondListItem v-for="(bond, i) in bonds" :key="i" :title="bond.bondName" :bondId="bond.id" v-on:remove-bond="onRemoveBond(i)"></BondListItem>
    </div>
</template>

<script>

import BondsApiService from '@/services/bonds-api.service';
import BondListItem from './bond-list-item.vue';
export default {
    name: 'BondListView',
    components: {
        BondListItem,
    },
    data() {
        return {
            bonds: [ ],
        }
    },
    methods: {
        retrieveBonds(id) {
            BondsApiService.getAllByUserId(id).then(
                (bonds) => {
                    if (bonds.data.length > 0) {
                        this.bonds = bonds.data;
                    } else {
                        this.bonds = [];
                    }
                    // console.log(this.bonds);
                }
            );
        },
        onRemoveBond(i) {
            this.bonds.splice(i, 1);
        }
    },
    mounted() {
        this.retrieveBonds(this.$route.params.userId);
    },
}

</script>

<style scoped>

.bonds-list-view-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: center;
    height: 100%;
    margin-bottom: 50px;
}


@media (max-width: 960px) {
    .bonds-list-view-container {
        margin-bottom: 0px;
    }
}

</style>