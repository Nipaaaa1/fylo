<template>
  <footer class="w-full bg-primary-dark-blue font-open-sans">
    <section class="container flex flex-col gap-10 px-6 py-12 text-white">
      <NuxtImg class="h-8 w-max" src="/images/footer.svg" alt="" />
      <ul class="space-y-2 *:flex *:items-center *:gap-4">
        <li>
          <NuxtImg class="h-max w-4" src="/images/icon-phone.svg" alt="" />
          <span>+1-543-123-4567</span>
        </li>
        <li>
          <NuxtImg class="h-max w-4" src="/images/icon-email.svg" alt="" />
          <span>example@fylo.com</span>
        </li>
      </ul>

      <ul class="space-y-2">
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
      <ul class="space-y-2">
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
      <ul class="flex items-center gap-4 self-center">
        <li>
          <Facebook
            class="size-8 rounded-full border border-white p-1.5 text-white"
          />
        </li>
        <li>
          <Twitter
            class="size-8 rounded-full border border-white p-1.5 text-white"
          />
        </li>
        <li>
          <Instagram
            class="size-8 rounded-full border border-white p-1.5 text-white"
          />
        </li>
      </ul>
    </section>
  </footer>
</template>
