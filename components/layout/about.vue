<template>
  <div class="w-full bg-neutral-blue">
    <section
      class="container mx-auto space-y-8 p-6 pb-24 md:flex md:flex-row-reverse md:justify-between md:p-16"
    >
      <NuxtImg
        class="h-max w-full pb-8 md:max-w-xl"
        src="/images/illustration-2.svg"
        alt=""
      />
      <div class="space-y-8 md:max-w-prose">
        <h2
          class="text-center text-lg font-bold text-primary-dark-blue md:text-left md:text-4xl"
        >
          Stay productive, wherever you are
        </h2>
        <p class="font-open-sans text-sm text-primary-desaturated-blue">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
          <br />
          <br />
          Securely share files and folders with friends, family, and colleagues
          for live collaboration. No email attachments required!
        </p>
        <a
          class="mx-auto flex w-max items-center gap-2 border-b border-accent-cyan pb-1 font-open-sans text-sm text-accent-cyan transition ease-in-out hover:brightness-125 md:mx-0"
          href="#"
        >
          See how Fylo works
          <NuxtImg class="size-5" src="/images/icon-arrow.svg" alt="" />
        </a>
        <div
          class="max-w-sm space-y-4 rounded bg-white p-8 font-open-sans text-xs text-primary-dark-blue shadow-lg"
        >
          <NuxtImg class="size-4" src="/images/icon-quotes.svg" alt="" />
          <p class="leading-5">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="flex gap-2">
            <NuxtImg
              class="size-10 rounded-full"
              src="/images/avatar-testimonial.jpg"
              alt=""
            />
            <div class="flex flex-col">
              <span class="font-raleway text-sm font-bold">Kyle Burton</span>
              <span class="text-primary-desaturated-blue"
                >Founder & CEO, Huddle</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
