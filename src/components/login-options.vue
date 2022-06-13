<template>
    <div>
        <v-form v-model="formValid" @submit.prevent="handleLogin">
            <div>
                <v-text-field color="#00ADB5" label="Correo" v-model="email" :rules="rules.email" outlined required>
                </v-text-field>
                <v-text-field color="#00ADB5" label="Contraseña" v-model="password" outlined
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                    :rules="rules.password" @click:append="showPassword = !showPassword" required>
                </v-text-field>
            </div>
            <div id="loginopts-acts">
                <router-link to="/start/recover" style="color: #393E46; text-align: center;">¿Olvidaste tu contraseña?
                    Recuperar contraseña
                </router-link>
                <v-btn depressed color=#393E46 class="loginopts-loginbtn" type="submit" :disabled="!formValid">Iniciar
                    Sesión</v-btn>
                <router-link to="/start/register" style="color: #393E46;">¿No tienes cuenta? Regístrate</router-link>
            </div>
        </v-form>
    </div>
</template>

<style scoped>
#loginopts-acts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

#loginopts-acts .loginopts-loginbtn {
    color: #00ADB5;
    width: 260px;
    height: 65px;
    border-radius: 0.7rem;
    font-size: 17px;
}
</style>

<script>

export default {
    data: () => ({
        email: '',
        password: '',
        formValid: false,
        showPassword: false,
        user: {
            username: '',
            password: ''
        },
        rules: {
            name: [
                val => !!val || 'El nombre es requerido',
            ],
            email: [
                val => !!val || 'El correo es requerido',
                val => /.+@.+/.test(val) || 'El correo debe ser válido',
            ],
            password: [
                val => !!val || 'La contraseña es requerida',
                val => val.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
            ]
        }
    }),
    methods: {
        handleLogin() {
            this.user.username = this.email;
            this.user.password = this.password;
            console.log(this.user);
            this.$router.push('/mybonds');
        }
    }
}

</script>