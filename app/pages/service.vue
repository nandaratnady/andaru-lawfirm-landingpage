<script setup>

// import semua icon dari lucide
import * as icons from "lucide-vue-next"

const services = await useSheet("services")

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

            <!-- Title -->
            <div class="text-center mb-12">

                <h1 class="text-4xl font-bold">
                    Layanan Hukum Andaru Lawfirm
                </h1>

                <p class="mt-4 text-lg max-w-2xl mx-auto">
                    Kami menyediakan layanan hukum profesional untuk membantu perusahaan
                    dalam menjaga kepatuhan, mengelola risiko, dan mendukung pertumbuhan bisnis.
                </p>

            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-3 gap-8">

                <div v-for="(item, i) in services" :key="i"
                    class="card bg-base-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 group">

                    <div class="card-body text-center">

                        <!-- Icon -->
                        <div class="mb-4 flex justify-center">

                            <component :is="getIcon(item.icon)"
                                class="w-10 h-10 text-primary group-hover:scale-110 transition" />

                        </div>

                        <!-- Title -->
                        <h2 class="text-xl font-bold">
                            {{ item.title }}
                        </h2>

                        <!-- Description -->
                        <p class="text-sm mt-2 text-gray-600">
                            {{ item.description }}
                        </p>

                    </div>

                </div>

            </div>

        </Container>

    </section>

</template>