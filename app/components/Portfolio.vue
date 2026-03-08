<script setup>

const portfolio = await useSheet("portfolio")

</script>

<template>

<section id="portfolio" class="py-24 bg-base-200">

  <Container>

    <div class="text-center mb-16">

      <h2 class="text-3xl font-bold">
        Portfolio Kami
      </h2>

      <p class="mt-4 opacity-70">
        Beberapa project yang telah kami kerjakan
      </p>

    </div>


    <div class="grid md:grid-cols-3 gap-8">

      <div
        v-for="item in portfolio"
        :key="item.title"
        class="card bg-base-100 shadow-lg hover:shadow-2xl transition"
        data-aos="fade-up"
      >

        <figure>
          <img
            :src="item.image"
            class="h-56 w-full object-cover"
          />
        </figure>

        <div class="card-body">

          <h3 class="card-title">
            {{ item.title }}
          </h3>

          <p class="opacity-70">
            {{ item.description }}
          </p>

        </div>

      </div>

    </div>

  </Container>

</section>

</template>