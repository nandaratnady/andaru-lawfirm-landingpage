<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">
        <img src="/logo-andaru.png" alt="Andaru Lawfirm" class="h-10" />
        ANDARU LAWFIRM
      </a>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/service">Service</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
