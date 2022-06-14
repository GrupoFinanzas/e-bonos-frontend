<template>
    <div class="bonds-list-view-container">
        <BondListItem title="Hello world"></BondListItem>
        <BondListItem title="Hello world 2"></BondListItem>
        <BondListItem title="Hello world 3"></BondListItem>
        <BondListItem title="Hello world 4"></BondListItem>
        <BondListItem title="Hello world 5"></BondListItem>
        <BondListItem title="Hello world 2"></BondListItem>
    </div>
</template>

<script>

import BondListItem from './bond-list-item.vue';
export default {
    name: 'BondListView',
    components: {
        BondListItem,
    }
}

</script>

<style scoped>

.bonds-list-view-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

</style>