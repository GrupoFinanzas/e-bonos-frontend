<template>
    <div>
        <v-form id="registeropts-form-container" v-model="formValid" @submit.prevent="handleLogin">
            <div>
                <v-text-field color="#00ADB5" label="Nombre" v-model="name" :rules="rules.name" outlined required>
                </v-text-field>
                <v-text-field color="#00ADB5" label="Correo" v-model="email" :rules="rules.email" outlined required>
                </v-text-field>
                <v-text-field color="#00ADB5" label="Contraseña" v-model="password" outlined
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                    :rules="rules.password" @click:append="showPassword = !showPassword" required>
                </v-text-field>
            </div>
            <v-card-actions id="registeropts-acts">
                <v-btn depressed color=#393E46 class="registeropts-registerbtn" type="submit" :disabled="!formValid">
                    Regístrate</v-btn>
                <router-link to="/start/login" style="color: #393E46">¿Ya tienes cuenta? Iniciar Sesión</router-link>
            </v-card-actions>
        </v-form>
    </div>
</template>

<script>

export default {
    data: () => ({
        email: '',
        password: '',
        name: '',
        formValid: false,
        showPassword: false,
        user: {
            name: '',
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
            this.user.name = this.name;
            this.user.username = this.email;
            this.user.password = this.password;
            console.log(this.user);
            this.$router.push('/mybonds');
        }
    }
}

</script>

<style scoped>
#registeropts-form-container {
    width: 400px;
}

#registeropts-acts {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#registeropts-acts .registeropts-registerbtn {
    color: #00ADB5;
    width: 260px;
    height: 65px;
    border-radius: 0.7rem;
    font-size: 17px;
}

@media (max-width: 960px) {
    #registeropts-form-container {
        width: 100%;
    }
}
</style>