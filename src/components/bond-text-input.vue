<template>
    <div class="bond-text-input-container">
        <div class="bond-text-input-text">{{ label }}</div>
        <div class="bond-text-input-container-text-input">
            <v-text-field v-if="!notTextInput" v-model="inputText" :placeholder="placeholder" dense outlined :readonly="readonly"
                :type="type != null ? type : 'text'" :hide-details="true" :rules="notRequired != null ? rules.nothing : rules.data" />
            <v-select v-if="options" v-model="selectedOption" :items="options" dense outlined :hide-details="true">
            </v-select>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        inputText: null,
        selectedOption: null,
        rules: {
            nothing: [
                () => true,
            ],
            data: [
                val => !!val || 'El dato es requerido',
            ],
        },
    }),
    props: [
        'label',
        'placeholder',
        'text',
        'readonly',
        'options',
        'type',
        'notTextInput',
        'notRequired'
    ],
    mounted() {
        this.inputText = this.text;
        if (this.options)
            this.selectedOption = this.options[0];
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