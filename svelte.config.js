import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Voor GitHub Pages project pages: /repo-naam
			// Voor user pages (username.github.io): leeg
			base: process.env.BASE_PATH || '/buiten-de-deur'
		}
	}
};

export default config;
