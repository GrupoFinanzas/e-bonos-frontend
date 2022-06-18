<template>
    <div class="bond-text-input-container">
        <div class="bond-text-input-text">{{ label }}</div>
        <div class="bond-text-input-container-text-input">
            <v-text-field v-model="bondName" :placeholder="placeholder" dense outlined :readonly="readonly"
                :hide-details="true"></v-text-field>
            <v-select v-if="options" v-model="defaultOption" :items="options" dense outlined :hide-details="true"></v-select>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        bondName: null,
        defaultOption: null,
    }),
    props: [
        'label',
        'placeholder',
        'text',
        'readonly',
        'options',
    ],
    mounted() {
        this.bondName = this.text;
        if (this.options)
            this.defaultOption = this.options[0];
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.bond-text-input-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.bond-text-input-container-text-input {
    width: 300px;
    display: flex;
    gap: 15px;
}

.bond-text-input-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 17px;
}


@media (max-width: 960px) {

    .bond-text-input-container {
        gap: 15px;
    }

    .bond-text-input-container-text-input {
        width: 100%;
    }
}
</style>