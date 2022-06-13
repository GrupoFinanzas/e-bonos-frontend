<template>
    <div>
        <v-form style="width: 400px;">
            <div>
                <v-text-field color="#00ADB5" label="Correo" outlined></v-text-field>
            </div>
            <v-card-actions id="recoveropts-acts">
                <v-btn depressed color=#393E46 class="recoveropts-btn">Recuperar</v-btn>
            </v-card-actions>
        </v-form>
    </div>
</template>

<style scoped>

#recoveropts-acts {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#recoveropts-acts .recoveropts-btn {
    color: #00ADB5;
    width: 260px;
    height: 65px;
    border-radius: 0.7rem;
    font-size: 17px;
}

</style>