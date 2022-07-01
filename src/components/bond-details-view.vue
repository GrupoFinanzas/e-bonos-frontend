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
            <BondTextInput ref="bondDuration" label="Duraciónㅤㅤㅤㅤㅤㅤㅤㅤ" :readonly="true" :notRequired="true"
                :options="durationOptions" />
            <BondTextInput ref="bondModifiedDuration" label="Duración modificadaㅤㅤ" :readonly="true"
                :notRequired="true" />
            <BondTextInput ref="bondConvexity" label="Convexidadㅤㅤㅤㅤㅤㅤ" :readonly="true" :notRequired="true" />
        </div>
        <div class="bond-details-view-actions-container">
            <BondActionBtn text="Calcular" :dense="true" :onClick="onCalculate"
                :disabled="!bondDataFormCompleted || calculatingState" />
            <BondActionBtn text="Guardar" :dense="true" :onClick="onSave" />
        </div>
    </div>
</template>

<script>
import BondTextInput from './bond-text-input.vue';
import BondActionBtn from './bond-action-btn.vue';
import { calculateGermanMethod } from '../bonds-formulas/calculate-german-method.js';
import BondsApiService from '@/services/bonds-api.service';

export default {
    data: () => ({
        frecuencyOptions: ['Anual', 'Semestral', 'Cuatrimestral', 'Trimestral', 'Bimestral', 'Mensual', 'Quincenal', 'Diario'],
        durationOptions: ['Años', 'Semestres', 'Cuatrimestres', 'Trimestres', 'Bimestres', 'Meses', 'Quincenas', 'Días'],
        frecuencyOptionsEnglish: ['Annual', 'Semiannual', 'FourMonthly', 'Quarterly', 'Bimonthly', 'Monthly', 'Fortnightly', 'Daily'],
        durationOptionsEnglish: ['Years', 'Semesters', 'FourMonths', 'Quarters', 'Trimesters', 'Months', 'Fortnight', 'Days'],
        inputRefs: [],
        outputRefs: [],
        isLoading: false,
        userId: '',
        bondId: '',
    }),
    components: { BondTextInput, BondActionBtn },
    props: [
        'isDolar',
        'editing',
    ],
    watch: {
        isDolar: function (is_dolar) {
            if (this.outputRefs[0].inputText === undefined) return;
            const dollarConversion = 3.80;
            for (let i = 1; i < 3; i++) {
                let money = parseFloat(this.outputRefs[i].inputText);
                money = is_dolar ? money / dollarConversion : money * dollarConversion;
                money = money.toFixed(3);
                this.outputRefs[i].inputText = money;
            }
        },
    },
    methods: {
        BondData(refs) {
            return {
                name: refs[0].inputText, // max 50
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
        getFrequencyNum(frequency) {
            for (let i = 0; i < this.frecuencyOptions.length; i++) {
                if (this.frecuencyOptions[i] === frequency) {
                    return i + 1;
                }
            }
        },
        getDurationNum(duration) {
            for (let i = 0; i < this.durationOptions.length; i++) {
                if (this.durationOptions[i] === duration) {
                    return i + 1;
                }
            }
        },
        getFrequencyEnglishNum(frequency) {
            for (let i = 0; i < this.frecuencyOptionsEnglish.length; i++) {
                if (this.frecuencyOptionsEnglish[i] === frequency) {
                    return i;
                }
            }
        },
        getDurationEnglishNum(duration) {
            for (let i = 0; i < this.durationOptionsEnglish.length; i++) {
                if (this.durationOptionsEnglish[i] === duration) {
                    return i;
                }
            }
        },
        onSave() {
            let couponRateFrequency = this.getFrequencyNum(this.$refs.bondCouponRate.selectedOption);
            let cokFrequency = this.getFrequencyNum(this.$refs.bondCok.selectedOption);
            let expirationUnit = this.getDurationNum(this.$refs.bondExpiration.selectedOption);
            let paymentPeriod = this.getFrequencyNum(this.$refs.bondPaymentPeriod.selectedOption);

            let newBond = {
                bondName: this.$refs.bondName.inputText,
                currencyType: 2,
                nominalValue: parseFloat(this.$refs.bondValue.inputText),
                rate: parseFloat(this.$refs.bondCouponRate.inputText),
                rateType: couponRateFrequency,
                cok: parseFloat(this.$refs.bondCok.inputText),
                cokFrequency: cokFrequency,
                paymentPeriods: paymentPeriod,
                expireDate: this.$refs.bondExpiration.inputText,
                expirationType: expirationUnit,
                createdAt: new Date(),
                accountId: this.userId
            }

            console.log(newBond);

            if (!this.editing) {
                BondsApiService.create(newBond).then(response => {
                    // console.log(response);
                    if (response.status === 200) {
                        this.$router.push(`/mybonds/${this.userId}`);
                    }
                });
            }
            else {
                BondsApiService.update(this.bondId, newBond).then(response => {
                    // console.log(response);
                    if (response.status === 200) {
                        this.$router.push(`/mybonds/${this.userId}`);
                    }
                });
            }
        },
        retrieveBondById(id) {
            BondsApiService.getById(id).then(
                (bond) => {
                    this.bond = bond.data;
                    console.log('venga');
                    console.log(this.bond);

                    let rateFrequency = this.frecuencyOptions[this.getFrequencyEnglishNum(this.bond.rateType)];
                    let pymPeriods = this.frecuencyOptions[this.getFrequencyEnglishNum(this.bond.paymentPeriods)];
                    let expDuration = this.durationOptions[this.getDurationEnglishNum(this.bond.expirationType)];
                    let ckFrequency = this.frecuencyOptions[this.bond.cokFrequency - 1];

                    this.$refs.bondName.inputText = this.bond.bondName;
                    this.$refs.bondValue.inputText = this.bond.nominalValue;
                    this.$refs.bondCouponRate.inputText = this.bond.rate;
                    this.$refs.bondCouponRate.selectedOption = rateFrequency;
                    this.$refs.bondPaymentPeriod.selectedOption = pymPeriods;
                    this.$refs.bondExpiration.inputText = this.bond.expireDate;
                    this.$refs.bondExpiration.selectedOption = expDuration;
                    this.$refs.bondCok.inputText = this.bond.cok;
                    this.$refs.bondCok.selectedOption = ckFrequency;

                    this.onCalculate();
                }
            );
        }
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
        },
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

        this.$on('moneyChange', function () {
            console.log('money changed')
        })

        this.userId = this.$route.params.userId;
        if (this.editing) {
            this.bondId = this.$route.params.bondId;
            this.retrieveBondById(this.bondId);
        }
    },
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