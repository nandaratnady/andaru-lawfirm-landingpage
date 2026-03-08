<script setup>
const features = await useSheet("features");
</script>

<template>
  <section class="py-24">
    <Container>
      <!-- SECTION TITLE -->

      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold">Kenapa Memilih Kami</h2>

        <p class="mt-4 opacity-70">
          Keunggulan yang membuat kami dipercaya oleh banyak klien
        </p>
      </div>

      <!-- FEATURES GRID -->

      <div class="grid md:grid-cols-4 gap-10">
        <div v-for="feature in features" :key="feature.title" class="text-center" data-aos="zoom-in">
          <div class="text-4xl mb-4">
            {{ feature.icon }}
          </div>

          <h3 class="font-semibold text-lg">
            {{ feature.title }}
          </h3>

          <p class="opacity-70 mt-2">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
