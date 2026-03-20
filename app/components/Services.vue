<script setup>

// import semua icon dari lucide
import * as icons from "lucide-vue-next"

const services = await useSheet("services");

// function untuk convert "file-text" → "FileText"
const getIcon = (name) => {
  if (!name) return null

  const formatted = name
    .toLowerCase()
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")

  return icons[formatted] || icons.Folder
}
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
        <div v-for="service in services" class="card bg-base-100 shadow-xl hover:shadow-2xl transition"
          data-aos="zoom-in">
          <div class="card-body items-center text-center">
            <div class="mb-4 flex justify-center">

              <component :is="getIcon(service.icon)" class="w-10 h-10 text-primary group-hover:scale-110 transition" />

            </div>

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
