<template>
  <section class="container relative space-y-8 p-6">
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
      <label for="" class="sr-only w-0">Email</label>
      <input
        class="w-full rounded border border-primary-desaturated-blue p-2 placeholder:font-open-sans placeholder:text-sm"
        type="text"
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
  <section class="container space-y-8 bg-neutral-blue p-6">
    <NuxtImg
      class="h-max w-full pb-8"
      src="/images/illustration-2.svg"
      alt=""
    />
    <h2 class="text-center text-lg font-bold text-primary-dark-blue">
      Stay productive, wherever you are
    </h2>
    <p class="font-open-sans text-sm text-primary-desaturated-blue">
      Never let location be an issue when accessing your files. Fylo has you
      covered for all of your file storage needs.
      <br />
      <br />
      Securely share files and folders with friends, family, and colleagues for
      live collaboration. No email attachments required!
    </p>
    <a
      class="mx-auto flex w-max items-center gap-2 border-b border-accent-cyan pb-1 font-open-sans text-sm text-accent-cyan"
      href="#"
    >
      See how Fylo works
      <ArrowRight
        class="size-4 rounded-full bg-accent-cyan p-0.5 text-neutral-blue"
      />
    </a>
  </section>
</template>
