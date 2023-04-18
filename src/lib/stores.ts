import { writable, derived } from "svelte/store";
import _ from "lodash";

export const scrambledPhraseLetters = writable([]);

export const scrambledPhrase = derived(
  scrambledPhraseLetters,
  ($scrambledPhraseLetters) => _.flatten($scrambledPhraseLetters).join("")
);

export const wordBlanks = writable([]);

export const wordLengths = derived(wordBlanks, ($wordBlanks) => {
  let count = 0;
  const lengths = [];
  for (const c of $wordBlanks) {
    if (c === ".") {
      count++;
    } else if (c === " ") {
      lengths.push(count);
      count = 0;
    }
  }
  lengths.push(count);
  return lengths;
});
