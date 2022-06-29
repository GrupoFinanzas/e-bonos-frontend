<template>
    <div class="bond-details-view-container">
        <div class="bond-details-view-midcontainer">
            <h3 id="bond-details-view-result-text">Ingresar</h3>
            <BondTextInput ref="bondName" label="Nombre del bonoㅤㅤㅤ" placeholder="Ej: Yanapay" :readonly="false" />
            <BondTextInput ref="bondValue" label="Valor nominalㅤㅤㅤㅤㅤ" placeholder="Ej: 1000" :readonly="false"
                type="number" />
            <BondTextInput ref="bondCouponRate" label="Tasa cupónㅤㅤㅤㅤㅤㅤㅤ" placeholder="Ej: 2%" :readonly="false"
                type="number" :options="frecuencyOptions" />
            <BondTextInput ref="bondPaymentPeriod" label="Periodos de pagoㅤㅤㅤ" :notTextInput="true"
                :options="frecuencyOptions" />
            <BondTextInput ref="bondExpiration" label="Vencimientoㅤㅤㅤㅤㅤㅤ" placeholder="Ej: 2" :readonly="false"
                type="number" :options="durationOptions" />
            <BondTextInput ref="bondCok" label="Tasa de interés del mercado" placeholder="Ej: 2%" :readonly="false"
                type="number" :options="frecuencyOptions" />
            <BondTextInput label="Método financieroㅤㅤㅤ" text="Método alemán" :readonly="true" />
        </div>
        <div class="bond-details-view-midcontainer">
            <h3 id="bond-details-view-result-text">Resultados</h3>
            <BondTextInput ref="bondTir" label="Tasa interna de rentabilidad (TIR)" :readonly="true"
                :options="frecuencyOptions" :notRequired="true" />
            <BondTextInput ref="bondVa" label="Valor del Bono (VA)ㅤㅤ" :readonly="true" :notRequired="true" />
            <BondTextInput ref="bondVan" label="Valor actual neto (VAN)" :readonly="true" :notRequired="true" />
            <BondTextInput ref="bondDuration" label="Duraciónㅤㅤㅤㅤㅤㅤㅤㅤ" :readonly="true" :notRequired="true" :options="durationOptions" />
            <BondTextInput ref="bondModifiedDuration" label="Duración modificadaㅤㅤ" :readonly="true" :notRequired="true" />
            <BondTextInput ref="bondConvexity" label="Convexidadㅤㅤㅤㅤㅤㅤ" :readonly="true" :notRequired="true" />
        </div>
        <div class="bond-details-view-actions-container">
            <BondActionBtn text="Calcular" :dense="true" :onClick="onCalculate" :disabled="!bondDataFormCompleted || calculatingState" />
            <BondActionBtn text="Guardar" :dense="true" :onClick="onSave" />
        </div>
    </div>
</template>

<script>
import BondTextInput from './bond-text-input.vue';
import BondActionBtn from './bond-action-btn.vue';
import { calculateGermanMethod } from '../bonds-formulas/calculate-german-method.js';

export default {
    data: () => ({
        frecuencyOptions: ['Anual', 'Semestral', 'Cuatrimestral', 'Trimestral', 'Bimestral', 'Mensual', 'Quincenal', 'Diario'],
        durationOptions: ['Años', 'Semestres', 'Cuatrimestres', 'Trimestres', 'Bimestres', 'Meses', 'Quincenas', 'Días'],
        marketTypeOptions: ['Mercado Primario', 'Mercado Secundario'],
        inputRefs: [],
        outputRefs: [],
        isLoading: false,
    }),
    components: { BondTextInput, BondActionBtn },
    props: [
        'isDolar',
    ],
    watch: {
        isDolar: function(is_dolar) {
            if (this.outputRefs[0].inputText === undefined) return;
            const dollarConversion = 3.80;
            for (let i = 1; i < 3; i++) {
                let money = parseFloat(this.outputRefs[i].inputText);
                money = is_dolar ? money / dollarConversion : money * dollarConversion;
                money = money.toFixed(3);
                this.outputRefs[i].inputText =  money;
            }
        },
    },
    methods: {
        BondData(refs) {
            return {
                name: refs[0].inputText,
                nominalValue: refs[1].inputText,
                couponRate: refs[2].inputText,
                couponRateFrecuency: refs[2].selectedOption,
                paymentPeriod: refs[3].selectedOption,
                cok: refs[4].inputText,
                cokFrecuency: refs[4].selectedOption,
                expiration: refs[5].inputText,
                expirationUnit: refs[5].selectedOption,
            };
        },
        onCalculate() {
            let bondData = this.BondData(this.inputRefs);
            let result = calculateGermanMethod(bondData);
            for (let i = 0; i < this.outputRefs.length; i++) {
                this.outputRefs[i].inputText = result.values[i];
            }
            setTimeout(() => {
                this.$refs.bondTir.updateSelectedOption(result.frequencies[0]);
                this.$refs.bondDuration.updateSelectedOption(result.frequencies[1]);
            }, 50);
        },
        onSave() {
            // TODO: Save bond
            this.$router.push('/mybonds');
        },
    },
    computed: {
        bondDataFormCompleted() {
            for (let i = 0; i < this.inputRefs.length; i++) {
                if ((this.inputRefs[i].inputText == null || this.inputRefs[i].inputText == '')
                    && (i != 3)) {
                    return false
                }
            }
            return true;
        },
        calculatingState() {
            return this.isLoading;
        },
        listeners() {
            return {
                ...this.$listeners,
                click: this.onCalculate
            }
        }
    },
    mounted() {
        this.inputRefs = [
            this.$refs.bondName,                    // 0
            this.$refs.bondValue,                   // 1
            this.$refs.bondCouponRate,              // 2
            this.$refs.bondPaymentPeriod,           // 3
            this.$refs.bondCok,                     // 4
            this.$refs.bondExpiration,              // 5
        ];
        this.outputRefs = [
            this.$refs.bondTir,                     // 0
            this.$refs.bondVa,                      // 1
            this.$refs.bondVan,                     // 2
            this.$refs.bondDuration,                // 3
            this.$refs.bondModifiedDuration,        // 4
            this.$refs.bondConvexity,               // 5
        ];

        this.$on('moneyChange', function() {
            console.log('money changed')
        })
    }
}

</script>

<style scoped>
.bond-details-view-container {
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5%;
}

.bond-details-view-midcontainer {
    width: 46%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.bond-details-view-actions-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

#bond-details-view-result-text {
    font-size: 23px;
    color: #00ADB5;
    font-family: 'Montserrat', sans-serif;
}

@media (max-width: 960px) {

    .bond-details-view-container {
        gap: 50px;
    }

    .bond-details-view-midcontainer {
        width: 100%;
    }

    .bond-details-view-actions-container {
        margin-top: 0px;
    }
}
</style>