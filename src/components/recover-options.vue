<template>
    <div>
        <v-form id="recoveropts-form-container">
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

#recoveropts-form-container {
    width: 400px;
}

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

@media (max-width: 600px) {
    #recoveropts-form-container {
        width: 100%;
    }
}

</style>