#!/usr/bin/env -S deno run --allow-read --allow-write

import { parse } from "jsr:/@std/csv";

const LYRICS_CSV_FILE_PATH = "./csv/lyrics.csv";
const LYRICS_JSON_FILE_PATH = "./json/lyrics.json";

async function generateJson() {
  const data = parse(await Deno.readTextFile(LYRICS_CSV_FILE_PATH), {
    skipFirstRow: true,
    columns: ["album", "song", "lyric", "section"],
  });

  await Deno.writeTextFile(
    LYRICS_JSON_FILE_PATH,
    JSON.stringify(
      {
        date_generated: new Date().toISOString(),
        data,
      },
      null,
      2,
    ),
  );
}

if (import.meta.main) {
  generateJson();
}
