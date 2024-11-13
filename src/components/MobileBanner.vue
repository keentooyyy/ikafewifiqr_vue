<script>
export default {
  name: "MobileBanner",
  props: {
    p_type: String,
  },
  data() {
    return {
      mobileView: false,
      desktopView: false,
    }
  },
  beforeMount() {
    if (this.p_type === "mobile") {
      this.mobileView = true;
    } else if (this.p_type === "desktop") {
      this.desktopView = true;
    }
  }
}
</script>

<template>
  <div>
    <div v-if="mobileView" class="relative">
      <img alt="header" class="" src="/header.png">
      <div class="w-full text-center title absolute text-sm text-white font-bold res-title-div">Free Wi-Fi Available</div>
    </div>

    <div v-if="desktopView">
      <img class="h-screen" src="/header-rotate.png" alt="header">
    </div>
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