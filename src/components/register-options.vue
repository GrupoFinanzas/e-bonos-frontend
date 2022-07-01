<template>
    <div>
        <v-form id="registeropts-form-container" v-model="formValid" @submit.prevent="handleRegister">
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
import User from '@/models/user';
import UsersApiService from '@/services/users-api.service';

export default {
    data: () => ({
        email: '',
        password: '',
        name: '',
        formValid: false,
        showPassword: false,
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
        handleRegister() {
            if (this.formValid) {

                let newUser = new User(this.name, this.email, this.password);
                this.$store.dispatch('auth/register', newUser)
                    .then(response => {
                        console.log(response);
                        this.login(newUser);
                    }).catch(e => {
                        console.log(e);
                    });
            }
        },
        login(user) {
            this.$store.dispatch('auth/login', user).then(
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