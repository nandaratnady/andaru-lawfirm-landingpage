<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<template>
  <div data-theme="andaru">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
