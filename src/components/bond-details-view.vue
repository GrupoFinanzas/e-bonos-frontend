<template>
    <div class="bond-details-view-container">
        <div class="bond-details-view-midcontainer">
            <BondTextInput 
                label="Nombre del bono"
                placeholder="Ej: Yanapay"
                :readonly="false"
            />
            <BondTextInput 
                label="Valor nominalㅤㅤㅤ"
                placeholder="Ej: 1000"
                :readonly="false"
            />
            <BondTextInput 
                label="Tasa cupónㅤㅤㅤㅤㅤ"
                placeholder="Ej: 2%"
                :readonly="false"
                :options="frecuencyOptions"
            />
            <BondTextInput 
                label="Vencimientoㅤㅤㅤㅤ"
                placeholder="Ej: 2"
                :readonly="false"
                :options="durationOptions"
            />
            <BondTextInput 
                label="Método financiero"
                text="Método alemán"
                :readonly="true"
            />
        </div>
        <div class="bond-details-view-midcontainer">
            <h3 id="bond-details-view-result-text">Resultados</h3>
            <BondTextInput 
                label="Tasa interna de rentabilidad (TIR)"
                text="4%"
                :readonly="true"
                :options="frecuencyOptions"
            />
            <BondTextInput 
                label="Valor del Bono (VA)"
                text="S/.  1000"
                :readonly="true"
            />
            <BondTextInput 
                label="Valor actual neto (VAN)"
                text="S/.  1000"
                :readonly="true"
            />
            <BondTextInput 
                label="Duraciónㅤㅤㅤㅤㅤㅤㅤㅤ"
                text="2"
                :readonly="true"
                :options="durationOptions"
            />
            <BondTextInput 
                label="Duración modificada"
                text="2.345"
                :readonly="true"
            />
            <BondTextInput 
                label="Convexidadㅤㅤㅤㅤㅤㅤ"
                text="3.456"
                :readonly="true"
            />
        </div>
        <div class="bond-details-view-actions-container">
            <BondActionBtn text="Calcular" :dense="true" />
            <BondActionBtn text="Guardar" route="/mybonds" :dense="true" />
        </div>
    </div>
</template>

<script>
import BondTextInput from './bond-text-input.vue';
import BondActionBtn from './bond-action-btn.vue';

export default {
    data: () => ({
        frecuencyOptions: [ 'Anual', 'Semestral', 'Cuatrimestral', 'Trimestral', 'Bimestral', 'Mensual', 'Quincenal', 'Diario' ],
        durationOptions: [ 'Años', 'Semestres', 'Cuatrimestres', 'Trimestres', 'Bimestres', 'Meses', 'Quincenas', 'Días' ],
    }),
    components: { BondTextInput, BondActionBtn }
}

</script>

<style scoped>

.bond-details-view-container {
    width: 100%;
    padding: 0  20px;
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