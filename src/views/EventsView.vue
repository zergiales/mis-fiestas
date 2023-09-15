<template>
    <div>
      <MyHeader></MyHeader>
        <div>
          <MyEvents></MyEvents>
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