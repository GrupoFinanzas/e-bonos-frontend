<template>
    <div class="bond-list-item-container">
        <router-link :to="routeToEditBond" class="bond-list-item-text">{{ title }}</router-link>
        <v-btn id="bond-list-item-trash-icon" color="#EEEEEE" fab elevation="0" @click="onRemoveBtnClicked">
            <v-icon size="25px">mdi-delete</v-icon>
        </v-btn>
    </div>
</template>

<script>
import BondsApiService from '@/services/bonds-api.service';

export default {
    name: 'BondsListView',
    props: [
        'title',
        'bondId'
    ],
    data() {
        return {
            userId: this.$route.params.userId,
            routeToEditBond: '',
        }
    },
    methods: {
        onRemoveBtnClicked() {
            console.log('remove bond');
            BondsApiService.delete(this.bondId).then(
                (response) => {
                    if (response.status === 200) {
                        this.$emit('remove-bond', this.bondId);
                    }
                }
            );
        }
    },
    created() {
        // console.log(this.userId);
        this.routeToEditBond = `/mybonds/${this.userId}/edit/${this.bondId}`;
    }

}
</script>

<style scoped>
.bond-list-item-container {
    display: flex;
    width: 100%;
    height: 67px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    background-color: #EEEEEE;
}

.bond-list-item-container:hover {
    background-color: #CFCFCF;
}

.bond-list-item-text {
    display: flex;
    align-items: center;
    height: 100%;
    width: 95.70%;
    max-width: 95.70%;
    overflow: hidden;
    text-decoration: none;
    color: black;
    cursor: default;
    padding-left: 20px;
}

.bond-list-item-text:hover + #bond-list-item-trash-icon {
    background-color: #CFCFCF !important;
}
</style>