export default function (eleventyConfig) {
  // Copy static files straight to the output folder
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // Readable dates, e.g. "1 August 2026"
  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(date)
  );

  // Machine-readable dates for <time datetime="">
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
};
