<script setup>
const header = await useSheet("header_top");
</script>

<template>
  <footer class="bg-warning text-white">
    <Container>
      <div class="py-16 grid md:grid-cols-4 gap-10">
        <!-- Company -->

        <div>
          <img src="/logo-andaru.png" class="h-12 mb-4" />

          <p class="opacity-80">
            Andaru Lawfirm adalah konsultan hukum perusahaan yang memberikan layanan
            konsultasi hukum, penyusunan kontrak bisnis, legal compliance, dan
            pendampingan sengketa bisnis.
          </p>
        </div>

        <!-- Menu -->

        <div>
          <h3 class="font-bold text-lg mb-4">Menu</h3>

          <ul class="space-y-2 opacity-80">
            <li><a href="/about" class="hover:text-primary">About</a></li>
            <li><a href="/services" class="hover:text-primary">Services</a></li>
            <li><a href="/portfolio" class="hover:text-primary">Portfolio</a></li>
            <li><a href="/contact" class="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->

        <div>
          <h3 class="font-bold text-lg mb-4">Legal Services</h3>

          <ul class="space-y-2 opacity-80">
            <li>Konsultasi Hukum Perusahaan</li>
            <li>Penyusunan Kontrak</li>
            <li>Legal Compliance</li>
            <li>Penyelesaian Sengketa</li>
          </ul>
        </div>

        <!-- Contact -->

        <div id="contact">
          <h3 class="font-bold text-lg mb-4">Contact</h3>

          <ul class="space-y-2 opacity-80">
            <li>📞 {{ header?.[0]?.phone }}</li>

            <li>✉ {{ header?.[0]?.email }}</li>

            <li>📍 {{ header?.[0]?.address }}</li>
          </ul>

          <a
            :href="'https://wa.me/' + header?.[0]?.whatsapp"
            target="_blank"
            class="btn btn-info mt-4"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>

      <!-- Bottom -->

      <div class="border-t border-white/20 py-6 text-center text-sm opacity-70">
        © {{ new Date().getFullYear() }} Andaru Lawfirm. All Rights Reserved.
      </div>
    </Container>
  </footer>
</template>
