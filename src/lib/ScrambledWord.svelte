<script lang="ts">
  import WordButtons from "./WordButtons.svelte";
  import { scrambledPhraseLetters } from "./stores";
  // import { onDestroy } from "svelte";

  // onDestroy(() => {
  //   scrambledPhraseLetters.update((arr) => {
  //     arr[idx] = [];
  //     return arr;
  //   });
  // });

  let letters: string;
  let suggestions = [];
  export let getSuggestions: Function;
  export let idx: number;
  let otherSelected = false;

  const setOtherSelected = (val: boolean) => {
    otherSelected = val;
  };

  // delete self brought to you by Thomas Hennes from STACK OVERFLOW
  let nodeRef;
</script>

<main bind:this={nodeRef}>
  <span>
    <label for="scrambledIn">Input scrambled word</label>
    <input
      id="scrambledIn"
      type="text"
      bind:value={letters}
      on:change={() => {
        suggestions = getSuggestions(letters.toLowerCase());
      }}
    />
    <button
      on:click={() => {
        scrambledPhraseLetters.update((arr) => {
          arr[idx] = [];
          return arr;
        });
        nodeRef.parentNode.removeChild(nodeRef);
      }}>X</button
    >
  </span>
  <ul id="suggestions">
    {#each suggestions as suggestion, i}
      <WordButtons {suggestion} {setOtherSelected} {otherSelected} {idx} />
    {/each}
  </ul>
</main>
