<template>
    <div id="op-ctn" class="openview-container">
        <div class="openview-midcontainer">
            <BackRouteBtn inivisibleRouteName="startOpts"></BackRouteBtn>
            <h1>e-Bonos</h1>
            <h2>Calcula tus bonos fácil</h2>
        </div>
        <router-view class="openview-midcontainer"></router-view>
    </div>
</template>

<script>
import BackRouteBtn from '../components/back-route-btn.vue';

export default {
    name: 'StartView',
    components: {
        BackRouteBtn,
    },
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

@media (max-width: 960px) {
    #op-ctn .openview-midcontainer {
        width: 100%;
    }
}
</style>