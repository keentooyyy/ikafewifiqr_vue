<script>
import {defineComponent} from "vue";
import MobileBanner from "@/components/MobileBanner.vue";
import ScanMe from "@/components/ScanMe.vue";
import QRCode from "@/components/QRCode.vue";
import WifiInfo from "@/components/WifiInfo.vue";

export default defineComponent({
  components: {WifiInfo, QRCode, ScanMe, MobileBanner},

  data() {
    return {
      p_data: '',
      wifi_info: [],
      mobileElementVisible: false,
      mobileWidth: 1023,
      desktopVisible: false,
    }
  },
  beforeMount() {
    const getWindowWidth = window.innerWidth;
    if (getWindowWidth < this.mobileWidth) {
      this.mobileElementVisible = true;
    }
    if (getWindowWidth > this.mobileWidth) {
      this.desktopVisible = true;
    }
  },
  mounted() {
    this.readPasswordFile();

    this.resizeWindowEvent()
    this.isElementVisible()
  },
  unmounted() {

    this.resizeWindowEvent()
    this.isElementVisible()
  },
  methods: {
    readPasswordFile() {
      fetch('/password.txt')  // Assuming the file is in the same directory as this HTML
          .then(response => response.text()) // Read the file as text
          .then(data => {
            // Output the file content to the div
            this.p_data = data;
          })
          .catch(error => {
            console.error('Error reading the file:', error);
          });

    },
    handleWifiEmit(EmitArray) {
      this.wifi_info = EmitArray;
    },
    isElementVisible() {
      this.mobileElementVisible = window.innerWidth < this.mobileWidth;
      this.desktopVisible = window.innerWidth > this.mobileWidth;
    },
    resizeWindowEvent() {
      window.addEventListener("resize", this.isElementVisible);
    },
  }
})

</script>

<template>

  <div v-if="mobileElementVisible" class="grid grid-cols-1 mx-auto res-app-div-container ">
    <MobileBanner p_type="mobile"/>
    <ScanMe/>
    <QRCode :p_wifi_info="wifi_info" p_type="mobile"/>
    <WifiInfo :p_password="p_data" @wifi-info="handleWifiEmit" p_type="mobile"/>
  </div>



  <div v-if="desktopVisible" class="flex">
    <MobileBanner p_type="desktop"/>
    <div class="flex-grow custom-grid">
      <div class="custom-col-span text-5xl font-bold text-center my-24"> Free Wi-Fi Available</div>
      <WifiInfo :p_password="p_data" @wifi-info="handleWifiEmit" p_type="desktop"/>
      <div>
        <QRCode :p_wifi_info="wifi_info" p_type="desktop"/>
        <ScanMe/>
      </div>

    </div>

  </div>
</template>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
}

.custom-col-span {
  grid-column: span 2 / span 2;
}

@screen sm {
  .res-app-div-container {
    @apply w-5/6 max-w-screen-sm
  }
}
@screen lg {

}
@screen xl {

}
@screen 2xl {

}


</style>
