<script setup>
const header = await useSheet("header_top");
</script>

<template>
  <div class="bg-warning text-secondary-content text-sm">
    <Container>
      <div class="flex justify-between py-2">
        <div>
          {{ header?.[0]?.company_name }}
        </div>

        <div class="flex gap-6">
          <span>📞 {{ header?.[0]?.phone }}</span>
          <span>✉ {{ header?.[0]?.email }}</span>
        </div>
      </div>
    </Container>
  </div>
</template>
