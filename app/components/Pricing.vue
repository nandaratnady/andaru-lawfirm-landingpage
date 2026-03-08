<script setup>
const plans = await useSheet("pricing");
</script>

<template>
  <section class="py-20 bg-base-100">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold">Model Kerjasama</h2>

        <p class="mt-4 text-lg opacity-70">
          Pilih model kerjasama yang sesuai dengan kebutuhan perusahaan
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="plan in plans" class="card bg-base-200 shadow-xl" data-aos="fade-up">
          <div class="card-body">
            <h3 class="text-2xl font-bold">
              {{ plan.title }}
            </h3>

            <p class="text-3xl font-bold text-primary mt-2">
              {{ plan.price }}
            </p>

            <ul class="mt-4 space-y-2">
              <li>✔ {{ plan.feature1 }}</li>
              <li>✔ {{ plan.feature2 }}</li>
              <li>✔ {{ plan.feature3 }}</li>
            </ul>

            <button class="btn btn-primary mt-6">Konsultasi</button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
