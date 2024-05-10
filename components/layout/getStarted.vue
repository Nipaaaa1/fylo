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
        class="mx-auto w-72 space-y-3 md:flex md:w-full md:flex-col md:space-y-5 md:pl-96"
      >
        <label for="email" class="sr-only w-0">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          class="w-full rounded p-2 placeholder:font-open-sans placeholder:text-sm"
        />
        <button
          type="submit"
          class="w-full rounded bg-accent-blue p-2 text-sm font-bold tracking-wider text-white shadow-md md:w-max md:px-12 md:py-3"
        >
          Get Started For Free
        </button>
      </form>
    </section>
  </div>
</template>
