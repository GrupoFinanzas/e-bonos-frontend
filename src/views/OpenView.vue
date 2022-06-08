<template>
    <div class="openview-container">
        <div class="openview-midcontainer-left">
            <h1 style="color: #00ADB5; font-size: 70px;">e-Bonos</h1>
            <h2 style="color: #393E46;">Calcula tus bonos fácil</h2>
        </div>
        <div class="openview-midcontainer-right">
            <v-btn depressed color=#393E46 to="/login" style="color: #00ADB5; width: 330px; height: 80px; border-radius: 0.7rem; font-size: 17px;">Iniciar Sesión</v-btn>
            <v-btn depressed color=#393E46 style="color: #00ADB5; width: 330px; height: 80px; border-radius: 0.7rem; font-size: 17px;">Regístrate</v-btn>
            <a href="#" style="color: #393E46">Recuperar contraseña</a>
        </div>
    </div>
</template>

<style scoped>
    .openview-container{
        display: flex;
        height: 100%;
        font-weight: bold;
        margin: 0 120px;
    }

    .openview-midcontainer-left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .openview-midcontainer-right{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>