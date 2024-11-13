<script>
// import QRCode from "@/components/QRCode.vue";
export default {
  name: "WifiInfo",
  props: {
    p_password: String,
    p_type: String,
  },
  emits: ['wifi-info'],
  data() {
    return {
      ssid: '',
      password: '',
      wifi_info: [],
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
  },
  mounted() {
    this.ssid = document.getElementById("ssid").innerText;
    this.wifi_info.push(this.ssid);
  },
  updated() {
    this.password = document.getElementById('password').innerText;
    this.wifi_info.push(this.password);
    this.emitSSIDAndPassword()
    // console.log(this.wifi_info)
  },
  methods: {
    emitSSIDAndPassword() {
      this.$emit('wifi-info', this.wifi_info);
    }
  }
}
</script>

<template>
  <div>

    <div v-if="mobileView" class="flex justify-center">
      <table class="text-xs res-wifiinfo-table">
        <tbody>
        <tr>
          <td class="text-right pr-10 opacity-50">SSID:</td>
          <td><span id="ssid" class="font-bold" @v-model="ssid">iKafe Free Wi-Fi</span></td>
        </tr>
        <tr>
          <td class="text-right pr-10 opacity-50">Password:</td>
          <td><span id="password" class="font-bold" @v-model="password">{{ p_password }}</span></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div v-if="desktopView">
      <div>
        <div>SSID:</div>
        <span id="ssid" @v-model="ssid">iKafe Free Wi-Fi</span>
      </div>

      <div>
        <div>Password:</div>
        <span id="password" class="" @v-model="password">{{ p_password }}</span>
      </div>

    </div>


  </div>


</template>

<style scoped>
@screen xs {
  .res-wifiinfo-table {
    @apply text-xl
  }

  .res-wifiinfo-div {

  }
}
@screen md {
  .res-wifiinfo-table {
    @apply text-2xl
  }
}
</style>