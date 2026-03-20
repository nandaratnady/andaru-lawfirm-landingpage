<script setup>

const contact = await useSheet("contact")

const data = contact.value[0]

</script>

<template>

    <section class="py-20 bg-base-200">

        <Container>

            <h1 class="text-4xl font-bold mb-10">
                Hubungi Kami
            </h1>

            <div class="grid md:grid-cols-2 gap-10">

                <!-- Info -->
                <div>

                    <p class="mb-4">
                        📍 {{ data.address }}
                    </p>

                    <p class="mb-4">
                        📞 {{ data.phone }}
                    </p>

                    <p class="mb-4">
                        ✉ {{ data.email }}
                    </p>

                    <a :href="data.whatsapp" class="btn btn-info mt-6" target="_blank">
                        Konsultasi via WhatsApp
                    </a>

                </div>

                <!-- Form dummy -->
                <div class="card bg-base-100 shadow">

                    <div class="card-body">

                        <input type="text" placeholder="Nama" class="input input-bordered mb-3" />
                        <input type="email" placeholder="Email" class="input input-bordered mb-3" />
                        <textarea class="textarea textarea-bordered mb-3" placeholder="Pesan"></textarea>

                        <button class="btn btn-primary">
                            Kirim Pesan
                        </button>

                    </div>

                </div>

            </div>

        </Container>

    </section>

</template>