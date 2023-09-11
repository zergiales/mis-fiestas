<template>
    <div>
        <h1>Login</h1>
        <MyLogin></MyLogin>
    </div>
</template>
<script>
import MyLogin from '../components/MyLogin.vue';

export default{
  components: {
    MyLogin,
  },        
};
</script>
<style scoped>
@import '../assets/css/style.css';
</style>
