<script>
  import WordBlanks from "./WordBlanks.svelte";
  import { scrambledPhrase } from "./stores";
  export let phrases = [];
</script>

<main>
  <!-- <label for="scrambledPhrase">Scrambled Phrase</label>
  <input type="text" id="scrambledPhrase" value={$scrambledPhrase} /> -->
  <span>Scrambled Phrase: </span><span> {$scrambledPhrase}</span>
  <p>
    Number of letters {$scrambledPhrase.length}
  </p>
  <WordBlanks />
  <ul>
    {#each phrases as phrase}
      <li>{phrase}</li>
    {/each}
  </ul>
</main>
