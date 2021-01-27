<template>
  <div>
    <div ref="refdom">123456</div>
    <!-- <bar-chart :data="chartData"></bar-chart> -->
  </div>
</template>

<script>
import { createRenderer, reactive, ref, onMounted } from 'vue'

export default {
  components: {},

  setup() {
    let ctx
    let canvas
    const chartData = reactive([
      { title: '⻘铜', count: 200, color: 'brown' },
      { title: '砖⽯', count: 300, color: 'skyblue' },
      { title: '星耀', count: 100, color: 'purple' },
      { title: '王者', count: 50, color: 'gold' }
    ])
    const refdom = ref(null)
    const draw = (el, noClear) => {
      if (!noClear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      if (el.tag == 'bar-chart') {
        const { data } = el
        const barWidth = canvas.width / 10,
          gap = 20,
          paddingLeft = (data.length * barWidth + (data.length - 1) * gap) / 2,
          paddingBottom = 10
        // x轴
        // 柱状图
        data.forEach(({ title, count, color }, index) => {
          const x = paddingLeft + index * (barWidth + gap)
          const y = canvas.height - paddingBottom - count
          ctx.fillStyle = color
          ctx.fillRect(x, y, barWidth, count)
          // text
        })
      }
      // 递归绘制⼦节点
      el.childs && el.childs.forEach(child => draw(child, true))
    }
    const nodeOps = {
      createElement: (tag, isSVG, is) => {
        // 创建元素时由于没有需要创建的dom元素，只需返回当前元素数据对象
        return { tag }
      },
      insert: (child, parent, anchor) => {
        // 我们重写了insert逻辑，因为在我们canvasApp中不存在实际dom插⼊操作
        // 这⾥⾯只需要将元素之间的⽗⼦关系保存⼀下即可
        child.parent = parent
        if (!parent.childs) {
          parent.childs = [child]
        } else {
          parent.childs.push(child)
        }
        // 只有canvas有nodeType，这⾥就是开始绘制内容到canvas
        if (parent.nodeType === 1) {
          draw(child)
        }
      },
      patchProp(el, key, prevValue, nextValue) {
        el[key] = nextValue
      }
    }
    onMounted(() => {
      console.log(refdom.value, chartData)
      canvas = document.createElement('canvas')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      refdom.value.appendChild(canvas)
      ctx = canvas.getContext('2d')

      createRenderer(nodeOps)
      // https://www.cnblogs.com/chengduxiaoc/p/7664397.html
    })

    return { chartData, refdom }
  }
}
</script>

<style lang="less" scoped></style>
