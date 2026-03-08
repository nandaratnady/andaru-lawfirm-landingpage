<script setup>
const about = await useSheet("about");
</script>

<template>
  <section class="py-20 bg-base-100">
    <Container>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div data-aos="fade-right">
          <img :src="about?.[0]?.image" alt="Andaru Lawfirm Konsultan Hukum Perusahaan" class="rounded-xl shadow-xl" />
        </div>

        <!-- Text -->
        <div data-aos="fade-left">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ about?.[0]?.title }}
          </h2>

          <p class="mt-6 text-lg leading-relaxed">
            {{ about?.[0]?.description }}
          </p>

          <button class="btn btn-primary mt-8">Konsultasi Sekarang</button>
        </div>
      </div>
    </Container>
  </section>
</template>
