<template>
    <div id="op-ctn" class="openview-container">
        <div class="openview-midcontainer">
            <router-link id="back_btn" to="" @click.native="goBackRoute()" class="d-none d-md-flex">
                <v-icon large style="margin-top: -2px;">mdi-chevron-left</v-icon>Volver
            </router-link>
            <h1>e-Bonos</h1>
            <h2>Calcula tus bonos fácil</h2>
        </div>
        <router-view class="openview-midcontainer"></router-view>
    </div>
</template>

<script>
export default {
    name: 'StartView',
    data() {
        return {
            backBtn: null,
        }
    },
    methods: {
        goBackRoute() {
            if (this.$router.currentRoute.name != 'startOpts')
                this.$router.back();
        },
        setBackBtnVisibility() {
            if (this.$router.currentRoute.name == 'startOpts') {
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.openview-container {
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: bold;
    padding: 0 5%;
    flex-wrap: wrap;
    justify-content: center;
}

#op-ctn .openview-midcontainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
}

/* Main title */
h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 66px;
    color: #00ADB5;
}

/* Subtitle */
h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 23px;
    color: #393E46;
}

/* Back Button */
#back_btn {
    position: absolute;
    top: 30px;
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

@media (max-width: 960px) {
    #op-ctn .openview-midcontainer {
        width: 100%;
    }
}
</style>