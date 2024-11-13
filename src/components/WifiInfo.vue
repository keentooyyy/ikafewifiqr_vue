<script>
// import QRCode from "@/components/QRCode.vue";
export default {
  name: "WifiInfo",
  props: {
    p_password: String,
  },
  data() {
    return {
      ssid: '',
      password: '',
      wifi_info: [],
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

  <div class="flex justify-center res-wifiinfo-div">
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


</template>

<style scoped>
@screen xs {
  .res-wifiinfo-table {
    @apply text-xl
  }
}
@screen md {
  .res-wifiinfo-table {
    @apply text-2xl
  }
}
@screen lg{
  .res-wifiinfo-div{
    @apply h-min justify-normal w-full block;
  }

}
</style>