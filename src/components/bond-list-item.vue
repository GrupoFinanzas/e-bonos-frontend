<template>
    <div class="bond-list-item-container">
        <router-link to="/mybonds/edit" class="bond-list-item-text">{{ title }}</router-link>
        <v-btn id="bond-list-item-trash-icon" color="#EEEEEE" fab elevation="0">
            <v-icon size="25px">mdi-delete</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'BondsListView',
    props: [
        'title'
    ]
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

#bond-list-item-trash-icon {
    border: 1px solid blue;

}
</style>