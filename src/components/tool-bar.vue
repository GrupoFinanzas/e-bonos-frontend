<template>
    <nav>
        <div>
            <v-app-bar id="app-bar-container" color="#222831" dark app>
                <v-app-bar-nav-icon v-if="showStartMenu" class="d-sm-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title class="d-none d-md-flex app-bar-title">e-B</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu v-if="!showStartMenu" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn id="app-bar-profile-btn" fab color="#00ADB5" v-bind="attrs" v-on="on">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" style="min-height: 38px; height: 38px;">
                            <v-list-item-icon style="margin: 8px 10px 0 0;"><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" v-if="showStartMenu" active-class="blue--text text--accent-4">
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
        showStartMenu: false,
        items: [
            { title: 'Mis bonos', icon: 'mdi-account', to: '/mybonds/ ' },
            { title: 'Agregar bono', icon: 'mdi-plus', to: '/mybonds/add' },
            { title: 'Cerrar Sesión', icon: 'mdi-logout', to: '/start' },
        ],
    }),
    methods: {
        setMenuLinksByRoute() {
            if (!this.$route.matched[0])
                return;

            if (this.$route.matched[0].path === '/start') {
                this.showStartMenu = true;
            }
            else if (this.$route.matched[0].path === '/mybonds') {
                this.showStartMenu = false;
            }
        }
    },
    watch: {
        '$route'() {
            this.setMenuLinksByRoute();
        }
    },
    mounted() {
        this.setMenuLinksByRoute();
    },
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

#app-bar-profile-btn {
    width: 40px;
    height: 40px;
    margin-right: 40px;
}

@media (max-width: 960px) {
    #app-bar-profile-btn {
        margin-right: 0px;
    }
}
</style>