<script>
import QRCode from "qrcode";

export default {
  name: "QRCode",
  props: {
    p_wifi_info: Array,
  },
  data() {
    return {
      ssid: '',
      password: '',
      src: '',
    }
  },
  updated() {
    this.callQr()
  },
  mounted() {
    this.callQr()
  },
  unmounted() {
    this.callQr()
  },
  methods: {
    generateQRCode() {
      // Get the input values
      const ssid = this.ssid
      const password = this.password
      let encryption = "WPA";


      // Generate the Wi-Fi QR code format
      let wifiQRCodeText = `WIFI:T:${encryption};S:${ssid};`;
      if (encryption !== "nopass") {
        wifiQRCodeText += `P:${password};`;
      }
      wifiQRCodeText += `;`;
      // console.log(wifiQRCodeText)


      // Generate the QR code
      QRCode.toDataURL(document.getElementById('qrcode'), encodeURIComponent(wifiQRCodeText), {
        text: wifiQRCodeText, // The QR code text (Wi-Fi details)
        width: 500,           // Width of the QR code
        height: 500,          // Height of the QR code
        colorDark: "#000000", // Dark color (default is black)
        correctLevel: 'H'
      }).then((url) => {
        this.src = url
      });
    },
    callQr() {
      this.ssid = this.p_wifi_info[0]
      this.password = this.p_wifi_info[1]
      this.generateQRCode()
    }
  },

}
</script>

<template>
  <div class="flex justify-center">
    <div class="w-96 res-qrcode-container">
      <img :src="src" alt="qr-code" class="w-full lg-qrcode-img">
    </div>
  </div>


</template>

<style scoped>
@screen md {
  .res-qrcode-container {
    @apply w-4/6
  }
}
</style>