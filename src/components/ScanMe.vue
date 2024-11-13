<script>
export default {
  name: "ScanMe",
}
</script>

<template>
  <div class="mt-5 res-scanme-div-container">
    <div class="flex justify-center items-center gap-5">
      <img alt="wifi-logo" class="w-10 res-scanme-img" src="/wifi-logo-svgrepo-com.png">
      <div class="font-bold text-2xl res-scanme-div-scantext">Scan Me!</div>
    </div>
  </div>

</template>

<style scoped>
@screen md {
  .res-scanme-div-container {
    @apply mt-0
  }

  .res-scanme-img {
    @apply w-14
  }

  .res-scanme-div-scantext {
    @apply text-3xl
  }
}
@screen lg{
  .res-scanme-div-scantext{
    @appply none
  }
}
</style>