import { ALPHABET } from "./constants";

export function groupByAlphabet(list, filterKey) {
  const grouped = {};

  ALPHABET.forEach((letter) => {
    grouped[letter] = [];
  });
  list.forEach((item) => {
    const firstLetter = item?.title[0]?.toUpperCase();
    if (
      firstLetter &&
      (!filterKey || filterKey === "#" || firstLetter === filterKey)
    ) {
      if (grouped[firstLetter]) {
        grouped[firstLetter].push(item);
      } else {
        grouped[firstLetter] = [item];
      }
    }
  });

  return grouped;
}
