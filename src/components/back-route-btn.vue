<template>
    <router-link id="back_btn" to="" @click.native="goBackRoute()" class="d-none d-md-flex">
        <v-icon large style="margin-top: -2px;">mdi-chevron-left</v-icon>Volver
    </router-link>
</template>

<script>
export default {
    name: 'BackRouteBtn',
    data() {
        return {
            backBtn: null,
        }
    },
    props: [
        'inivisibleRouteName',
    ],
    methods: {
        goBackRoute() {
            if (this.$router.currentRoute.name != this.inivisibleRouteName)
                this.$router.back();
        },
        setBackBtnVisibility() {
            if (this.$router.currentRoute.name == this.inivisibleRouteName) {
                this.backBtn.style.opacity = "0";
                setTimeout(() => {
                    this.backBtn.style.display = "none";
                }, 500);
            }
            else {
                this.backBtn.style.display = "block";
                setTimeout(() => {
                    this.backBtn.style.opacity = "1";
                }, 1);
            }
        },
    },
    watch: {
        '$route'() {
            this.setBackBtnVisibility();
        }
    },
    mounted() {
        this.backBtn = document.getElementById("back_btn");
        this.setBackBtnVisibility();
    }
}
</script>

<style>

/* Back Button */
#back_btn {
    position: absolute;
    top: 28px;
    left: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.01ch;
    text-decoration: none;
    color: #393E46;
    transition: all 0.2s ease;
    text-transform: unset !important;
}

</style>