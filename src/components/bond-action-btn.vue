<template>
    <div id="bond-action-text-container">
        <v-btn class="bond-action-text-btn" v-if="!responsive" :to="route" color="#00ADB5">{{ text }}</v-btn>
        <div v-else>
            <v-btn class="bond-action-text-btn" v-if="!mobile" :to="route" color="#00ADB5">{{ text }}</v-btn>
            <v-btn class="bond-action-icon-btn" v-else :to="route" color="#00ADB5" fab>
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
    </div>
</template>


<script>
export default {
    name: 'BondActionBtn',
    props: [
        'text',
        'icon',
        'route',
        'responsive',
        'dense',
    ],
    computed: {
        mobile() {
            return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
        },
    },
    mounted() {
        if (this.dense) {
            var bondActsBtn = document.getElementsByClassName('bond-action-text-btn');
            for (let i = 0; i < bondActsBtn.length; i++) {
                bondActsBtn[i].style.padding = '0 20px';
                bondActsBtn[i].style.height = '45px';
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#bond-action-text-container .bond-action-text-btn {
    height: 56px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: unset !important;
    padding: 0 40px;
}

#bond-action-text-container .bond-action-icon-btn {
    width: 56px;
    height: 56px;
    color: white;
    text-transform: unset !important;
}
</style>