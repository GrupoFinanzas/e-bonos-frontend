<template>
    <div style="width: 100%; height: 100%;">
        <BackRouteBtn inivisibleRouteName="myBondsOpts"></BackRouteBtn>
        <router-view class="my-bonds-view-container"></router-view>
    </div>
</template>

<script>
import BackRouteBtn from '@/components/back-route-btn.vue';

export default {
    name: 'MyBondsView',
    components: {
    BackRouteBtn
}
}

</script>

<style scoped>
.my-bonds-view-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 3%;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
</style>