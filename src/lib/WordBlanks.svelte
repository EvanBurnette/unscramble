<script>
  import { wordBlanks } from "./stores";
</script>

<main>
  <!-- <p>{$wordBlanks.join("")}</p> -->
  <div id="blanks">
    {#each $wordBlanks as char}
      {#if char === "."}
        <div class="square">
          <div class="circle" />
        </div>
      {:else}
        <div class="space" />
      {/if}
    {/each}
  </div>
  <br />
  <button
    on:click={() => {
      wordBlanks.update((arr) => {
        arr.push(".");
        return arr;
      });
    }}>+ Add letter</button
  >
  <button
    on:click={() => {
      wordBlanks.update((arr) => {
        arr.push(" ");
        return arr;
      });
    }}>+ Add space</button
  >
  <button
    on:click={() => {
      wordBlanks.update((arr) => {
        arr.pop();
        return arr;
      });
    }}>- Delete</button
  >
</main>

<style>
  #blanks > div {
    display: inline-block;
    width: 2rem;
    aspect-ratio: 1/1;
    box-sizing: border-box;
  }
  .square {
    border: solid white 2px;
    width: 2rem;
  }
  .circle {
    border: solid white 1px;
    border-radius: 50%;
    height: 100%;
  }
</style>
