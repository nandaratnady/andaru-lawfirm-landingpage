<script setup>

const header = await useSheet("header_top")

</script>

<template>

<a
:href="'https://wa.me/' + header?.[0]?.whatsapp"
target="_blank"
class="fixed bottom-6 right-6 btn btn-success btn-circle shadow-xl text-xl"
>

💬

</a>

</template>