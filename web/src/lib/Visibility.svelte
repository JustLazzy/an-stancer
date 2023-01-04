<script lang="ts">
  import { onMount } from "svelte";

  let isvisible = false;
  onMount(() => {
    setTimeout(() => {
      isvisible = true;
    }, 500);
  });
</script>

{#if isvisible}
  <div class="relative h-full w-full">
    <slot />
  </div>
{/if}
