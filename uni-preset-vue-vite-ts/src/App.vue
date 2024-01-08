<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { lyla } from '@/http'

lyla({
  url: '/api/lyla',
  method: 'post',
  json: {
    name: 'lyla'
  }
})

onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
