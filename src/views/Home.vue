<template>
  <div ref="parent" class="full">
    <VueP5 v-on="{ setup, draw, keypressed }" />
  </div>
</template>

<script>
import VueP5 from 'vue-p5'

export default {
  name: 'Home',
  components: {
    VueP5,
  },
  methods: {
    setup(s) {
      s.createCanvas(this.$refs.parent.offsetWidth, this.$refs.parent.offsetHeight)
      s.parent(this.$refs.parent)
    },
    draw(s) {
      s.background('#ff5252')
      s.fill(255)
      s.noStroke()
      s.ellipse(this.$store.state.xBall, this.$store.state.yBall, this.$store.state.diameter, this.$store.state.diameter)
      this.$store.state.xBall += this.$store.state.xBallChange
      this.$store.state.yBall += this.$store.state.yBallChange

      if (this.$store.state.xBall < this.$store.state.diameter / 2 || this.$store.state.xBall > s.width - this.$store.state.diameter / 2) {
        this.$store.state.xBallChange *= -1
      }
      if (this.$store.state.yBall < this.$store.state.diameter / 2 || this.$store.state.yBall > s.height - this.$store.state.diameter / 2) {
        this.$store.state.yBallChange *= -1
      }
    },
    // keypressed(s) {},
  },
}
</script>

<style lang="scss" scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>
