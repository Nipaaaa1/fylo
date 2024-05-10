<template>
  <section class="container relative space-y-8 p-6 text-primary-dark-blue">
    <NuxtImg class="h-max w-full" src="/images/illustration-1.svg" alt="" />
    <h1 class="text-center text-2xl font-bold">
      All your files in one secure location, accessible anywhere.
    </h1>
    <p class="text-center font-open-sans">
      Fylo stores your most important files in one secure location. Access them
      whenever you need, share and collaborate with friends, family, and
      co-workers.
    </p>
    <form class="space-y-4 pb-16">
      <label for="email" class="sr-only w-0">Email</label>
      <input
        class="w-full rounded border border-primary-desaturated-blue p-2 placeholder:font-open-sans placeholder:text-sm"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <button
        type="submit"
        class="w-full rounded bg-accent-blue p-2 text-sm font-bold tracking-wider text-white shadow-md"
      >
        Get Started
      </button>
    </form>
    <NuxtImg
      class="absolute bottom-0 left-0 w-full"
      src="/images/bg-curve-mobile.svg"
      alt=""
    />
  </section>
</template>
