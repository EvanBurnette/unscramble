<script>
  import WordBlanks from "./WordBlanks.svelte";
  import { scrambledPhrase } from "./stores.js";
</script>

<main>
  <label for="scrambledPhrase">Scrambled Phrase</label>
  <input type="text" id="scrambledPhrase" value={$scrambledPhrase} />
  <p>
    Number of letters {$scrambledPhrase.length}
  </p>
  <WordBlanks />
</main>
