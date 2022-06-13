<template>
    <div id="startopts-container" style="gap: 15px;">
        <v-btn depressed color=#393E46 to="/start/login" class="startopts-btn">Iniciar Sesión</v-btn>
        <v-btn depressed color=#393E46 to="/start/register" class="startopts-btn">Regístrate</v-btn>
        <router-link to="/start/recover" style="color: #393E46">Recuperar contraseña</router-link>
    </div>
</template>

<style scoped>
#startopts-container .startopts-btn {
    width: 330px;
    height: 80px;
    border-radius: 0.7rem;
    font-size: 17px;
    color: #00ADB5;
}
</style>