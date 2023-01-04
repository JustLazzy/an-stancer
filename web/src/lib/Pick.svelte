<script lang="ts">
  export let value = 0;
  export let title = "Height";
</script>

<div class="px-2">
  <div class="flex justify-between px-1">
    <p class="text-lg tracking-wide">{title}</p>
    <input
      type="number"
      min="0"
      bind:value
      class="w-12 h-6 flex items-center justify-center rounded text-black text-center focus:outline-none"
    />
  </div>
  <input
    type="range"
    bind:value
    class="
    shit
    form-range
    appearance-none
    w-full
    h-6
    p-0
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none"
  />
</div>

<style lang="postcss">
  .shit::-webkit-slider-thumb {
    @apply bg-rose-500 w-4 h-4;
  }
  .shit::-webkit-slider-runnable-track {
    @apply bg-gray-900/50;
  }
</style>
