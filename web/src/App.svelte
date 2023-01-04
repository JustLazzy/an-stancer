<script lang="ts">
  import Pick from "./lib/Pick.svelte";
  import Visibility from "./lib/Visibility.svelte";
  import { fly } from "svelte/transition";
  interface IValues {
    text: string;
    value: any;
  }
  let values: IValues[] = [
    { text: "Height", value: undefined },
    { text: "Wheel Offset Front", value: undefined },
    { text: "Wheel Offset Rear", value: undefined },
  ];
</script>

<Visibility>
  <div
    in:fly={{ x: 20 }}
    class="float-right m-2 p-2 text-white bg-rose-700 w-72 rounded font-bebas drop-shadow-2xl"
  >
    <p class="text-center text-3xl tracking-wider">An - Stancer</p>
    <div class="w-full border rounded mt-1 box-shadow" />
    <div class="mt-2 flex flex-col gap-2">
      {#each values as value}
        <Pick bind:value={value.value} title={value.text} />
      {/each}
    </div>
    <div class="text-center">
      <button class="btn"> SAVE </button>
    </div>
  </div>
</Visibility>

<style lang="postcss">
  .btn {
    @apply w-full bg-rose-600 rounded text-lg hover:bg-rose-500;
    @apply transition-colors;
  }
</style>
