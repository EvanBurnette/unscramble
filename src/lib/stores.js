import { writable, derived } from "svelte/store";
import _ from "lodash";

export const scrambledPhraseLetters = writable([]);

export const scrambledPhrase = derived(
  scrambledPhraseLetters,
  ($scrambledPhraseLetters) => _.flatten($scrambledPhraseLetters).join("")
);

export const wordBlanks = writable([]);
