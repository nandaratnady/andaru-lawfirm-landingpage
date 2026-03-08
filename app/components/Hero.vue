<script setup>

const hero = await useSheet("hero")

</script>

<template>
  <section class="py-20 bg-base-200">
    <Container>

      <div class="text-center max-w-2xl mx-auto">

        <h1 class="text-4xl md:text-5xl font-bold">
          {{ hero?.[0]?.title }}
        </h1>

        <p class="mt-6 text-lg opacity-80">
          {{ hero?.[0]?.subtitle }}
        </p>

        <a
          :href="hero?.[0]?.button_link"
          class="btn btn-primary mt-8"
        >
          {{ hero?.[0]?.button_text }}
        </a>

      </div>

    </Container>
  </section>
</template>