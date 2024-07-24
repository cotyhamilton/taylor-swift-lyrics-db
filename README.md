# taylor swift lyrics db

https://cotyhamilton.github.io/taylor-swift-lyrics-db

Initial data sourced from [MargauxThw/TS-lyrics](https://github.com/MargauxThw/TS-lyrics)

## example

```ts
const res = await fetch(
  "https://cotyhamilton.github.io/taylor-swift-lyrics-db/lyrics.json"
);
const data = await res.json();

// albums
console.log(
  data
    .map(({ album }) => album)
    .filter((value, index, self) => self.indexOf(value) === index)
    .reverse()
);

// [
//   "Taylor Swift",
//   "Fearless (Taylor's Version)",
//   "Speak Now (Taylor's Version)",
//   "Red (Taylor's Version)",
//   "1989 (Taylor's Version)",
//   "Reputation",
//   ...
// ]

// songs
console.log(
  data
    .filter(({ album }) => album === "Reputation")
    .map(({ song }) => song)
    .filter((value, index, self) => self.indexOf(value) === index)
);

// [
//   "...Ready For It?",
//   "End Game",
//   "I Did Something Bad",
//   "Don't Blame Me",
//   "Delicate",
//   "Look What You Made Me Do",
//   ...
// ]

// lyrics
console.log(
  data
    .filter(({ song }) => song === "Delicate")
    .reduce((prev, curr) => prev + "\n" + curr.lyric, "")
);

// This ain't for the best
// My reputation's never been worse, so
// You must like me for me...
// We can't make
// Any promises now, can we, babe?
// But you can make me a drink
// ...
```

## build

Generate json from csv

```sh
./generate.ts
```
