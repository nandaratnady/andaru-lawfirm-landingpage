<script setup>

const portfolio = await useSheet("portfolio")

</script>

<template>

    <section class="py-20">

        <Container>

            <h1 class="text-4xl font-bold text-center mb-12">
                Pengalaman & Portofolio
            </h1>

            <div class="grid md:grid-cols-3 gap-8">

                <div v-for="(item, i) in portfolio" :key="i"
                    class="card bg-base-100 shadow-lg hover:shadow-xl transition">

                    <figure>
                        <img v-if="item.image" :src="item.image" class="h-48 w-full object-cover" />
                    </figure>

                    <div class="card-body">

                        <h2 class="card-title">
                            {{ item.title }}
                        </h2>

                        <p>
                            {{ item.description }}
                        </p>

                    </div>

                </div>

            </div>

        </Container>

    </section>

</template>