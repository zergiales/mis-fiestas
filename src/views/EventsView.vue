<template>
    <div>
      <v-spacer></v-spacer>
      <MyHeader></MyHeader>
      <div>
        <!--aqui van las tarjetas-->
        <div>
          <MyEvents></MyEvents>
        </div>

        </div>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue';
import MyEvents from '@/components/MyEvents.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyEvents,
    MyFooter,
  },
};
</script>