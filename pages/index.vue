<script setup lang="ts">
useHead({
  title: "Fylo Landing Page",
  meta: [
    {
      name: "description",
      content:
        "This is a solution of Fylo Landing Page Challenge from Frontend Mentor by Devan",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>
    <LayoutHeader />
    <LayoutAbout />
    <LayoutGetStarted />
  </div>
</template>
