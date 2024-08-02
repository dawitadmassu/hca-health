import { ALPHABET } from "./constants";

export function groupByAlphabet(list) {
  const grouped = {};

  ALPHABET.forEach((letter) => {
    grouped[letter] = [];
  });
  list.forEach((item) => {
    const firstLetter = item?.title[0]?.toUpperCase();
    if (firstLetter) {
      if (grouped[firstLetter]) {
        grouped[firstLetter].push(item);
      } else {
        grouped[firstLetter] = [item];
      }
    }
  });

  return grouped;
}
