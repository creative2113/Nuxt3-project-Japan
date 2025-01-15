<script setup lang="ts">
const props = defineProps<{
  link?: string;
  direction?: "down" | "up" | "left" | "right";
  classes?: string;
}>();
const dir = ref("")

onMounted(() => {
  switch (props.direction) {
    case "up":
      dir.value = "after:!rotate-[225deg]";
      break;
    case "down":
      dir.value = "after:!rotate-[135deg]";
      break;
    case "left":
      dir.value = "after:!left-5 after:!rotate-[225deg]";
      break;
    case "right":
      dir.value = "after:!rotate-45";
      break;
    default:
      dir.value = "after:rotate-45"
      break;
  }
})
onUpdated(() => {
  switch (props.direction) {
    case "up":
      dir.value = "after:!rotate-[315deg]";
      break;
    case "down":
      dir.value = "after:!rotate-[135deg]";
      break;
    case "left":
      dir.value = "after:!left-5 after:!rotate-[225deg]";
      break;
    case "right":
      dir.value = "after:!rotate-45";
      break;
    default:
      dir.value = "after:rotate-45"
      break;
  }
})
</script>
<template>
  <nuxt-link v-if="link" :to="link"
    class="block w-[255px] h-[60px] pt-5 text-sm text-center mx-auto relative border border-[#99999955] rounded-full after:block after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-[#E39597] after:origin-center after:rotate-45 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-5"
    :class="[dir, classes]">
    <slot></slot>
  </nuxt-link>
  <button v-else
    class="block cursor-pointer w-[255px] h-[60px] pt-0.5 text-sm text-center mx-auto relative border border-[#99999955] rounded-full after:block after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-[#E39597] after:origin-center after:rotate-45 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-5"
    :class="[dir, classes]">
    <slot></slot>
  </button>
</template>
