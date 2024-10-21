<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppService from '@/services/appService.ts';

const setupApp = async () => {
  await AppService.getEndpoint();
  // AppService
}

setupApp()

</script>

<style scoped></style>
