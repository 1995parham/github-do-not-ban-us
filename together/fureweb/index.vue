<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'GitHub is for everyone!'
    }
  },
  mounted () {
    console.log(this.message)
  }
}
</script>
