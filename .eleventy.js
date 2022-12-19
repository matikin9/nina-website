const isProduction = process.env.NODE_ENV === "prod";

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

	// eleventyConfig.setBrowserSyncConfig({
	// 	files: './docs/css/**/*.css'
	// });

	return {
		pathPrefix: isProduction ? "" : "/nina-website/",
		dir: {
            input: "src",
			output: "docs"
		}
	}
}