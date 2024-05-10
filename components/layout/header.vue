<template>
  <section
    class="container relative mx-auto space-y-8 p-6 text-primary-dark-blue md:flex md:flex-row-reverse md:justify-between md:p-16"
  >
    <NuxtImg
      class="h-max w-full md:h-full md:w-max"
      src="/images/illustration-1.svg"
      alt=""
    />
    <div class="space-y-8 md:max-w-xl">
      <h1 class="text-center text-2xl font-bold md:text-left md:text-4xl">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p class="text-center font-open-sans md:text-left">
        Fylo stores your most important files in one secure location. Access
        them whenever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <form class="space-y-4 pb-16 md:flex md:gap-4 md:pb-80">
        <label for="email" class="sr-only w-0">Email</label>
        <input
          class="w-full rounded border border-primary-desaturated-blue p-2 placeholder:font-open-sans placeholder:text-sm md:w-4/5"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          class="w-full rounded bg-accent-blue p-2 text-sm font-bold tracking-wider text-white shadow-md md:w-80"
        >
          Get Started
        </button>
      </form>
    </div>
    <NuxtImg
      class="absolute bottom-0 left-0 w-full md:hidden"
      src="/images/bg-curve-mobile.svg"
      alt=""
    />
    <NuxtImg
      class="bottom-0 left-0 hidden w-full md:absolute md:block"
      src="/images/bg-curve-desktop.svg"
      alt=""
    />
  </section>
</template>
