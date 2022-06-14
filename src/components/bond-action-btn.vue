<template>
    <v-btn id="bond-action-btn" :to="route" color="#00ADB5">{{ text }}</v-btn>
</template>


<script>
export default {
    name: 'BondActionBtn',
    props: [
        'text',
        'route'
    ],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#bond-action-btn {
    height: 56px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: unset !important;
    padding: 0 40px;
}
</style>