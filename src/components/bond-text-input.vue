<template>
    <div class="bond-text-input-container">
        <div class="bond-text-input-text">{{ label }}</div>
        <div class="bond-text-input-container-text-input">
            <v-text-field v-if="!notTextInput" v-model="inputText" :placeholder="placeholder" dense outlined :readonly="readonly"
                :type="type != null ? type : 'text'" :hide-details="true" :rules="notRequired != null ? rules.nothing : rules.data" />
            <v-select v-if="options" v-model="selectedOption" :items="options" dense outlined :hide-details="true" @input="onChange" />
        </div>
    </div>
</template>

<script>
import { Units } from '../bonds-formulas/calculate-german-method.js';

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
        lastSelectedOption: null,
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
    methods: {
        onChange() {
            if (this.readonly) {
                console.log(this.inputText);
                console.log(this.selectedOption);

                let lastSelectedOptionValue = 0;
                for (let i in Units) {
                    if (this.lastSelectedOption === Units[i].frecuencyString) {
                        console.log('lastSelectedOpt: ' + Units[i].frecuencyString);
                        lastSelectedOptionValue = i;
                        break;
                    }
                    if (this.lastSelectedOption === Units[i].durationString) {
                        console.log('lastSelectedOpt: ' + Units[i].durationString);
                        lastSelectedOptionValue = i;
                        break;
                    }
                }

                for (let i in Units) {
                    if (this.selectedOption === Units[i].frecuencyString) {
                        this.inputText =
                            Math.pow(1 + (parseFloat(this.inputText)/100), Units[lastSelectedOptionValue].forYears / Units[i].forYears) - 1;
                        break;
                    }
                    if (this.selectedOption === Units[i].durationString) {
                        this.inputText = (parseFloat(this.inputText)/100) * (Units[lastSelectedOptionValue].forYears / Units[i].forYears);
                        break;
                    }
                }
                this.inputText *= 100;
                this.inputText = parseFloat(this.inputText).toFixed(3);
                this.lastSelectedOption = this.selectedOption;
            }
        },
        updateSelectedOption(newValue) {
            this.selectedOption = newValue;
            this.lastSelectedOption = this.selectedOption;
        }
    },
    mounted() {
        this.inputText = this.text;
        if (this.options) {
            this.selectedOption = this.options[0];
            this.lastSelectedOption = this.selectedOption;
        }
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