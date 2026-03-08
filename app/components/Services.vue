<script setup>
const services = await useSheet("services");
</script>

<template>
  <section class="py-20 bg-base-200">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold">Layanan Hukum</h2>

        <p class="mt-4 text-lg opacity-70">
          Layanan hukum profesional untuk kebutuhan perusahaan Anda
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="service in services"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition"
          data-aos="zoom-in"
        >
          <div class="card-body items-center text-center">
            <div class="text-4xl mb-4">⚖️</div>

            <h3 class="card-title">
              {{ service.title }}
            </h3>

            <p>
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
