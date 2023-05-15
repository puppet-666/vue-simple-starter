<script lang="ts" setup>
const [fold] = useFold();
</script>

<template>
  <!-- 路由上访问 /about 即可看到该 SFC -->
  <div> I am about page</div>
  <div>{{ fold }}</div>
</template>
