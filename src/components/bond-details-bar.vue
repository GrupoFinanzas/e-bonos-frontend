<template>
    <div class="bond-details-bar-container">
        <div class="bond-details-bar-text">S/.</div>
        <v-switch v-model="isChecked" color="#D3FDFF" light inset style="width: 40px" @change="onChange"></v-switch>
        <div class="bond-details-bar-text">$</div>
    </div>
</template>

<script>

export default {
    name: 'BondDetailsBar',
    components: {
    },
    data: () => ({
        isChecked: false,
    }),
    methods: {
        onChange() {
            this.$emit('moneyChange', this.isChecked);
        },
    },
}

</script>


<style scoped>

.bond-details-bar-container {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 0.7rem;
    background-color: #00ADB5;
    gap: 20px;
}

.bond-details-bar-text {
    color: white;
    font-size: 1rem;
    font-weight: bold;
}

</style>