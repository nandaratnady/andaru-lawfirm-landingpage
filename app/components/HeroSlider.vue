<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

useSeoMeta({

  title: "Andaru Lawfirm | Konsultan Hukum Perusahaan",
  
  description:
    "Andaru Lawfirm memberikan layanan konsultasi hukum perusahaan, legal compliance, contract drafting, serta pendampingan sengketa bisnis.",

  ogTitle: "Andaru Lawfirm",
  
  ogDescription:
    "Your Trusted Partner in Strategic Corporate Law",

})

const slides = await useSheet("hero_slider");
</script>

<template>
  <section id="home" class="relative">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000 }"
      data-aos="fade-up"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.image">
        <div class="relative h-[500px]">
          <img :src="slide.image" class="w-full h-full object-cover" />

          <div class="absolute inset-0 bg-black/40"></div>

          <div class="absolute inset-0 flex items-center">
            <Container>
              <div class="text-white max-w-xl">
                <h1 class="text-4xl md:text-5xl font-bold">
                  {{ slide.title }}
                </h1>

                <p class="mt-4 text-lg">
                  {{ slide.subtitle }}
                </p>
              </div>
            </Container>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
