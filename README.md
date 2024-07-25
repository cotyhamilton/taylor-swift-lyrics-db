# taylor swift lyrics db

https://cotyhamilton.github.io/taylor-swift-lyrics-db

Data initially sourced from [MargauxThw/TS-lyrics](https://github.com/MargauxThw/TS-lyrics)

## example

> [!WARNING]
> To prevent breaking changes from breaking your app\
> Don't use the hosted json file, copy it to your project from this repo

```ts
type Lyrics = {
  date_generated: string;
  data: {
    album: string;
    song: string;
    lyric: string;
    section: string;
  }[];
};

const res = await fetch(
  "https://cotyhamilton.github.io/taylor-swift-lyrics-db/json/lyrics.json"
);
const { data } = (await res.json()) as Lyrics;

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
    .map(({ lyric }) => lyric)
    .join("\n")
);

// This ain't for the best
// My reputation's never been worse, so
// You must like me for me...
// We can't make
// Any promises now, can we, babe?
// But you can make me a drink
// ...
```

## contributing

Update records in [csv/lyrics.csv](./csv/lyrics.csv), rebuild, and make a pull request

## build

Generate json from csv

```sh
./generate.ts
```
