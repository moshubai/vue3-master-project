<template>
  <div class="home">Counter:</div>
</template>

<script>
import { onMounted } from 'vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  setup() {
    console.log('====================================')
    console.log(12)
    console.log('====================================')
    onMounted(() => {
      console.log('12')
      console.log('====================================')
    })
  }
}
</script>
