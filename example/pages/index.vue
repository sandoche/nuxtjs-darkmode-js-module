<template>
  <div>
    <button @click="toggle()">This toggle will work if widget disabled</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle () {
      this.darkmode.toggle()
    }
  }
};
</script>
