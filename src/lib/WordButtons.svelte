<script lang="ts">
  export let suggestion: string;
  let selectedWord = false;
  export let setOtherSelected: Function;
  export let otherSelected: boolean;
  let letterButtons = [];
  import { scrambledPhraseLetters, scrambledPhrase } from "./stores";
  export let idx: number;
  let letterSelected = new Array(suggestion.length).fill(false);
  $: selectedLetters = suggestion.split("").filter((letter, i) => {
    return letterSelected[i];
  });
  $: {
    // scrambledPhraseLetters[idx] = selectedLetters;
    scrambledPhraseLetters.update((arr) => {
      arr[idx] = selectedLetters;
      return arr;
    });
  }
</script>

{#if selectedWord}
  <li>
    {#each suggestion.split("") as char, j}
      <button
        bind:this={letterButtons[j]}
        on:click={() => {
          letterSelected[j] = !letterSelected[j];
          letterSelected = [...letterSelected];
          letterButtons[j].classList.toggle("selected");
        }}>{char.toUpperCase()}</button
      >
    {/each}
    <button
      on:click={() => {
        selectedWord = false;
        setOtherSelected(false);
        // scrambledPhraseLetters[idx] = [];
      }}>X</button
    >
  </li>
{:else if otherSelected}
  <!-- <Empty /> -->
{:else}
  <li>
    <button
      on:click={() => {
        selectedWord = true;
        setOtherSelected(true);
      }}
    >
      {suggestion}
    </button>
  </li>
{/if}

<style>
  :global(.selected) {
    background: lightgreen;
    color: black;
  }
</style>
