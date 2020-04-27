module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addLayoutAlias("main", "templates/mainDoc.njk");
  eleventyConfig.addLayoutAlias("inkoop", "templates/subDoc.njk");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_layouts",
      includes: "_includes",
      output: "dist",
    },
  };
};
