module.exports = {
	siteMetadata: {
		title: "Console Log Inc.",
		description: "Console Log Inc. official website.",
		author: "@olivierlebel",
	},
	plugins: [
		"gatsby-plugin-resolve-src",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-offline",
		"gatsby-plugin-sass",
		"gatsby-plugin-material-ui",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#000000",
				theme_color: "#000000",
				display: "minimal-ui",
				icon: "src/assets/img/cli-icon.png", // This path is relative to the root of the site.
			},
		},
	],
}