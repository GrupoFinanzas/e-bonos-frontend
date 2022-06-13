<template>
        <div>
            <v-form style="width: 400px;">
                <div>
                    <v-text-field color="#00ADB5" label="Nombre" outlined></v-text-field>
                    <v-text-field color="#00ADB5" label="Correo" outlined></v-text-field>
                    <v-text-field color="#00ADB5" label="Contraseña" outlined></v-text-field>
                </div>
                <v-card-actions id="registeropts-acts">
                    <v-btn depressed color=#393E46
                        style="color: #00ADB5; width: 260px; height: 65px; border-radius: 0.7rem; font-size: 17px;">
                        Regístrate</v-btn>
                <router-link to="/start/login" style="color: #393E46">¿Ya tienes cuenta? Iniciar Sesión</router-link>
                </v-card-actions>
            </v-form>
        </div>
</template>

<style scoped>

#registeropts-acts {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

</style>