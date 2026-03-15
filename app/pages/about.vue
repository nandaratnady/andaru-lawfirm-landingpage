    <script setup>

    const about = await useSheet("about")

    </script>

    <template>

    <section class="py-20">

    <Container>

    <div
    v-for="(item,i) in about"
    :key="i"
    class="mb-12"
    >

    <h1 class="text-3xl font-bold mb-4">
    {{ item.title }}
    </h1>

    <h2 class="text-xl text-primary mb-4">
    {{ item.subtitle }}
    </h2>

    <p class="text-lg leading-relaxed">nnnn
    {{ item.description }}
    </p>

    <img
    v-if="item.image"
    :src="item.image"
    class="mt-6 rounded-lg"
    />

    </div>

    </Container>

    </section>

    </template>