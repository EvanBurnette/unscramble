<script lang="ts">
  // TODO: create phrase finding web workers
  import ScrambledWord from "./lib/ScrambledWord.svelte";
  import ScrambledPhrase from "./lib/ScrambledPhrase.svelte";
  import words_alpha from "./assets/words_alpha.txt?raw";
  import _ from "lodash";

  const countLetters = (word) => {
    const counts = {};
    for (const letter of word) {
      if (!(letter in counts)) {
        counts[letter] = 1;
      } else {
        counts[letter] += 1;
      }
    }
    return counts;
  };

  const words = words_alpha.split("\n").map((word) => {
    return { word: word, counts: countLetters(word) };
  });

  const getSuggestions = (letters: string) => {
    const thisCounts = countLetters(letters);
    const tempWords = words.filter((word) => {
      return (
        word.word.length === letters.length &&
        _.isEqual(word.counts, thisCounts)
      );
    });
    return tempWords.map((word) => word.word);
  };
  let scrambledWords = [];
  scrambledWords.length = 1;
</script>

<main>
  {#each scrambledWords as _, i}
    <ScrambledWord {getSuggestions} bind:this={scrambledWords[i]} idx={i} />
  {/each}
  <button
    on:click={() => {
      scrambledWords.length += 1;
    }}
  >
    + ADD SCRAMBLED WORD
  </button>
  <ScrambledPhrase />
</main>

<style>
  :global(.selected) {
    background: lightgreen;
    color: black;
  }
</style>
