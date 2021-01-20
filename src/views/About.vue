<template>
  <div class="about">
    Counter:{{ counter }}
    <p>{{ dobCount }}</p>
    <p>{{ objectOjb.bar }}</p>
    <p>{{ objectOjb.foo }}</p>
    <p ref="refsdom">我是ref</p>
    <button @click="countFn">1</button>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onUnmounted, onBeforeUnmount, ref, reactive, computed, watch } from 'vue'

export default {
  name: 'AboutPage',
  components: {},
  beforeCreate() {
    console.log(1)
  },
  created() {
    console.log(2)
  },
  setup() {
    console.log('最最开始执行的')
    //
    const { counter } = dbCountFn()

    const objectOjb = reactive({
      bar: '1111',
      foo: 222222
    })
    console.log(counter, objectOjb)

    const countFn = () => {
      counter.value++
      objectOjb.bar = '99999999'
    }

    const dobCount = computed(() => counter.value * 2)

    watch(counter, (newVal, oldVal) => {
      console.log(newVal, oldVal, counter.value)
    })

    onBeforeMount(() => {
      console.log(3)
    })
    onMounted(() => {
      console.log(refsdom)
      console.log(4)
    })

    onBeforeUnmount(() => {
      console.log(5)
    })
    onUnmounted(() => {
      console.log(6)
    })
    const refsdom = ref(null)
    return { counter, countFn, objectOjb, dobCount, refsdom }
  }
}
const dbCountFn = () => {
  const counter = ref(1)
  return { counter }
}
</script>
