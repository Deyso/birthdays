import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = {
	port: 3000,
	open: true
};

export default defineConfig({
	plugins: [sveltekit()],
	server: config,
	preview: config
});
