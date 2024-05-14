<template>
  <footer class="w-full bg-primary-dark-blue font-open-sans">
    <section
      class="container mx-auto flex flex-col gap-10 px-6 py-12 text-white md:py-24"
    >
      <NuxtImg class="h-8 w-max md:h-12" src="/images/footer.svg" alt="" />
      <div class="flex flex-col gap-10 md:w-full md:flex-row md:gap-64">
        <ul class="space-y-2 *:flex *:items-center *:gap-4 md:space-y-4">
          <li>
            <NuxtImg class="h-max w-4" src="/images/icon-phone.svg" alt="" />
            <span>+1-543-123-4567</span>
          </li>
          <li>
            <NuxtImg class="h-max w-4" src="/images/icon-email.svg" alt="" />
            <span>example@fylo.com</span>
          </li>
        </ul>

        <ul class="space-y-2 *:cursor-pointer md:space-y-4">
          <li class="transition ease-in-out hover:text-accent-blue">
            About Us
          </li>
          <li class="transition ease-in-out hover:text-accent-blue">Jobs</li>
          <li class="transition ease-in-out hover:text-accent-blue">Press</li>
          <li class="transition ease-in-out hover:text-accent-blue">Blog</li>
        </ul>
        <ul class="space-y-2 *:cursor-pointer md:space-y-4">
          <li class="transition ease-in-out hover:text-accent-blue">
            Contact Us
          </li>
          <li class="transition ease-in-out hover:text-accent-blue">Terms</li>
          <li class="transition ease-in-out hover:text-accent-blue">Privacy</li>
        </ul>
        <ul
          class="flex items-center gap-4 self-center *:cursor-pointer md:self-start"
        >
          <li>
            <Facebook
              class="size-8 rounded-full border border-white p-1.5 text-white transition ease-in-out hover:border-accent-blue hover:text-accent-blue"
            />
          </li>
          <li>
            <Twitter
              class="size-8 rounded-full border border-white p-1.5 text-white transition ease-in-out hover:border-accent-blue hover:text-accent-blue"
            />
          </li>
          <li>
            <Instagram
              class="size-8 rounded-full border border-white p-1.5 text-white transition ease-in-out hover:border-accent-blue hover:text-accent-blue"
            />
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>
