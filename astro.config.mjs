import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: vercel({
		maxDuration: 5
	}),
	integrations: [
		react(),
		svelte(),
		tailwind({
			applyBaseStyles: false
		})
	],
	experimental: {
		serverIslands: true,
		env: {
			schema: {
				API_URL: envField.string({ context: 'server', access: 'secret' })
			}
		}
	}
});
