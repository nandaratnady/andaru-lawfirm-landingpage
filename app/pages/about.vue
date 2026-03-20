<script setup>

const about = await useSheet("about")

const intro = about.value.find(i => i.section === "intro")
const visi = about.value.find(i => i.section === "vision")
const misi = about.value.filter(i => i.section === "mission")

</script>

<template>

    <section class="py-20">

        <Container>

            <h1 class="text-4xl font-bold mb-6">
                {{ intro.title }}
            </h1>

            <p class="mb-10 text-lg">
                {{ intro.description }}
            </p>


            <h2 class="text-2xl font-bold mb-4">
                Visi
            </h2>

            <p class="mb-10">
                {{ visi.description }}
            </p>


            <h2 class="text-2xl font-bold mb-4">
                Misi
            </h2>

            <ol class="list-decimal pl-6 space-y-2">

                <li v-for="(item, i) in misi" :key="i">
                    {{ item.description }}
                </li>

            </ol>

        </Container>

    </section>

</template>