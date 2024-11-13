<script>
export default {
  name: "MobileBanner",
  props: {
    p_type: String,
  },
  data() {
    return {
      mobileBanner: false,
      desktopBanner: false,
    }
  },
  beforeMount() {
    if (this.p_type === "mobile") {
      this.mobileBanner = true;
    } else if (this.p_type === "desktop") {
      this.desktopBanner = true;
    }
  }
}
</script>

<template>
  <div v-if="mobileBanner" class="relative">
    <img alt="header" class="" src="/header.png">
    <div class="w-full text-center title absolute text-sm text-white font-bold res-title-div">Free Wi-Fi Available</div>
  </div>

  <div v-if="desktopBanner">
    <img class="h-screen" src="/header-rotate.png" alt="header">
  </div>

</template>

<style scoped>

.title {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  filter: drop-shadow(0px 12px 5px #000000);
}

@screen xs {
  .res-title-div {
    @apply text-xl
  }
}
@screen sm {
  .res-title-div {
    @apply text-2xl
  }
}

</style>