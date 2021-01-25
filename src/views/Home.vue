<template>
  <div class="home">
    Counter:{{ counter }}
    <p>{{ objectOjb.bar }}</p>
    <p>{{ objectOjb.foo }}</p>
    <button @click="countFn">1</button>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onUnmounted, onBeforeUnmount, ref, reactive } from 'vue'

export default {
  name: 'Home',
  components: {},
  beforeCreate() {
    console.log(1)
  },
  created() {
    console.log(2)
  },
  setup() {
    const counter = ref(1)
    const objectOjb = reactive({
      bar: '1111',
      foo: 222222
    })
    console.log(counter, objectOjb)
    console.log('最最开始执行的')

    const countFn = () => {
      counter.value++
      objectOjb.bar = '99999999'
    }

    onBeforeMount(() => {
      console.log(3)
    })
    onMounted(() => {
      console.log(4)
    })

    onBeforeUnmount(() => {
      console.log(5)
    })
    onUnmounted(() => {
      console.log(6)
    })
    return { counter, countFn, objectOjb }
  }
}
</script>
