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

<script>
import UsersApiService from '@/services/users-api.service';


export default {
    data: () => ({
        email: '',
        password: '',
        formValid: false,
        showPassword: false,
        user: {
            email: '',
            password: ''
        },
        rules: {
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
        async handleLogin() {
            if (!this.formValid) return;

            this.user.email = this.email;
            this.user.password = this.password;
            
            this.$store.dispatch('auth/login', this.user).then(
                (userId) => {
                    // console.log('Logged In '+ userId);
                    this.goToRoute(userId);
                },
                error => {
                    console.log('The login failed'+ error.response);
                }
            );
        },
        goToRoute(id) {
            UsersApiService.getById(id)
                .then(response =>{
                    console.log(response);
                    this.$store.dispatch('auth/savePerson', response.data);
                    this.$router.push(`/mybonds/${id}`);
                }).catch(e =>{
                console.log(e);
            });
        }
    }
}

</script>

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