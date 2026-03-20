<script setup>
import { Menu } from "lucide-vue-next"
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 shadow-sm justify-between border-b border-base-300">

    <!-- LEFT -->
    <div class="flex items-center gap-2">

      <!-- MOBILE MENU -->
      <div class="dropdown lg:hidden">

        <label tabindex="0" class="btn btn-ghost">
          <Menu class="w-6 h-6" />
        </label>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/service">Service</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>

      </div>

      <!-- LOGO (DESKTOP) -->
      <div class="hidden lg:flex items-center gap-2">

        <img src="/logo-andaru.png" class="h-10" />

        <span class="font-bold text-lg">
          ANDARU LAWFIRM
        </span>

      </div>

    </div>

    <!-- CENTER LOGO (MOBILE ONLY) -->
    <div class="lg:hidden absolute left-1/2 -translate-x-1/2">

      <img src="/logo-andaru.png" class="h-8" />

    </div>

    <!-- RIGHT MENU (DESKTOP) -->
    <div class="hidden lg:flex">

      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/service">Service</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>

    </div>

  </div>
</template>