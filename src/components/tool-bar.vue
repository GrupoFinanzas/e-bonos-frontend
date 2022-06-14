<template>
    <nav>
        <div>
            <v-app-bar id="app-bar-container" color="#222831" dark>
                <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title class="app-bar-title">e-B</v-toolbar-title>
                <!-- aca agregar icono de usuario -->
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="blue--text text--accent-4">
                        <v-list-item to="/start/login">
                            <v-list-item-title>Iniciar Sesión</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/start/register">
                            <v-list-item-title>Registrarse</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/start/recover">
                            <v-list-item-title>Recuperar contraseña</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app-bar-container .app-bar-title {
    font-family: 'Montserrat', sans-serif;
    color: #00ADB5;
    font-weight: bold;
    font-size: 32px;
    margin-left: 40px;
}
</style>