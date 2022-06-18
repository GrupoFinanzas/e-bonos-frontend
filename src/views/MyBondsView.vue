<template>
    <div class="my-bonds-view-container">
        <BackRouteBtn inivisibleRouteName="myBondsOpts"></BackRouteBtn>
        <div class="my-bonds-view-container">
            <h1 id="my-bonds-view-title">MIS BONOS</h1>
            <router-view class="my-bonds-view-router-container"></router-view>
        </div>
    </div>
</template>

<script>
import BackRouteBtn from '@/components/back-route-btn.vue';

export default {
    name: 'MyBondsView',
    data() {
        return {
            title: null
        }
    },
    components: {
        BackRouteBtn
    },
    methods: {
        setTitleByRoute() {
            if (this.$route.name == "myBondsOpts") {
                this.title.innerHTML = "MIS BONOS";
            }
            else if (this.$route.name == "addBond") {
                this.title.innerHTML = "NUEVO BONO";
            }
            else if (this.$route.name == "editBond") {
                this.title.innerHTML = "EDITAR BONO";
            }
        }
    },
    watch: {
        '$route'() {
            this.setTitleByRoute();
        }
    },
    mounted() {
        this.title = document.getElementById("my-bonds-view-title");
        this.setTitleByRoute();
    },
}

</script>

<style scoped>
.my-bonds-view-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.my-bonds-view-router-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 3%;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

#my-bonds-view-title {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    width: 100%;
    margin-top: 3%;
}

@media (max-width: 960px) {
    #my-bonds-view-title {
        margin-top: 6%;
    }

    .my-bonds-view-router-container {
        margin-bottom: 12%;
        /* height: fit-content; */
    }
}
</style>