// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@components': '/src/components',
                '@layouts': '/src/layouts',
                '@pages': '/src/pages',
                '@public': '/public',
                '@styles': '/src/styles',
                '@font': '/public/assets/font'
            }
        }
    }
});
