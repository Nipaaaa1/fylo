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
  <div class="w-full bg-primary-desaturated-blue">
    <section
      class="container mx-auto space-y-4 px-6 py-16 text-center text-neutral-blue md:flex md:justify-between"
    >
      <div class="max-w-prose space-y-4 md:text-left">
        <h2 class="text-lg font-bold tracking-wider">Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form
        @submit="handleSubmit"
        class="mx-auto w-72 space-y-3 md:flex md:w-full md:flex-col md:space-y-5 md:pl-96"
      >
        <label for="email" class="sr-only w-0">Email</label>
        <div class="w-full">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            :class="`w-full rounded border p-2 text-primary-desaturated-blue placeholder:font-open-sans placeholder:text-sm ${isEmail ? '' : 'border-red-500'}`"
          />
          <p v-if="!isEmail" class="pt-1 text-left text-sm">
            Please check your email
          </p>
        </div>
        <button
          type="submit"
          class="w-full rounded bg-accent-blue p-2 text-sm font-bold tracking-wider text-white shadow-md transition ease-in-out hover:brightness-110 md:w-max md:px-12 md:py-3"
        >
          Get Started For Free
        </button>
      </form>
    </section>
  </div>
</template>
