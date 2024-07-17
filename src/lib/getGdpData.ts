"use server";

import fs from "node:fs";

export async function getGdpData() {
  //   const data = fs.readFileSync("");

  console.log("hello world");

  const file = await fs.readFileSync(
    process.cwd() + "/src/data/gdp.csv",
    "utf-8"
  );

  console.log(file);
}
