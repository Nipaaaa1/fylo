<script setup lang="ts">
const email = ref<string>();
const isEmail = ref<boolean>(true);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value as string)) {
    console.log("berhasil");
    isEmail.value = true;
  } else {
    console.log("gagal");
    isEmail.value = false;
  }
};
</script>

<template>
  <section
    class="container relative mx-auto space-y-8 p-6 text-primary-dark-blue md:flex md:flex-row-reverse md:justify-between md:p-16"
  >
    <NuxtImg
      class="h-max w-full md:max-w-xl"
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

      <form
        @submit="handleSubmit"
        class="space-y-4 pb-16 md:flex md:gap-4 md:pb-80"
      >
        <label for="email" class="sr-only w-0">Email</label>
        <div class="flex w-full flex-col">
          <input
            v-model="email"
            :class="`w-full rounded border p-2 placeholder:font-open-sans placeholder:text-sm md:w-full ${isEmail ? 'border-primary-desaturated-blue' : 'border-red-500'}`"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <p v-if="!isEmail" class="text-sm text-red-500">
            Please check your email
          </p>
        </div>
        <button
          type="submit"
          class="h-max w-full rounded bg-accent-blue py-3 text-sm font-bold tracking-wider text-white shadow-md transition ease-in-out hover:brightness-125 md:w-80"
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
      class="-bottom-12 left-0 hidden w-full md:absolute md:block"
      src="/images/bg-curve-desktop.svg"
      alt=""
    />
  </section>
</template>
