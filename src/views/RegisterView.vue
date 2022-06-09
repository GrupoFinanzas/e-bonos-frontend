<template>
    <div class="openview-container">
        <div class="openview-midcontainer-left">
            <v-btn to="/" text style="color: #393E46; font-weight: bold; font-size: 20px; position: absolute; top: 30px; left: 30px; padding-left: 0px;"><v-icon x-large>mdi-chevron-left</v-icon>Volver</v-btn>
            <h1 style="color: #00ADB5; font-size: 70px;">e-Bonos</h1>
        </div>
        <div class="openview-midcontainer-right">
            <v-card elevation="0" style="width: 60%;">
                <v-card-text style="padding-bottom: 0px;">
                    <v-text-field color="#00ADB5" label="Nombre" outlined></v-text-field>
                    <v-text-field color="#00ADB5" label="Correo" outlined></v-text-field>
                    <v-text-field color="#00ADB5" label="Contraseña" outlined></v-text-field>
                </v-card-text>
                <v-card-actions class="d-flex flex-column my-auto justify-space-between" style="height: 130px; margin-top: 0px;">
                    <v-btn depressed color=#393E46
                        style="color: #00ADB5; width: 260px; height: 65px; border-radius: 0.7rem; font-size: 17px;">Regístrate</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<style scoped>
.openview-container {
    display: flex;
    height: 100%;
    font-weight: bold;
    margin: 0 120px;
}

.openview-midcontainer-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.openview-midcontainer-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>