/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {

    webpack: (config) => {
        config.resolve.alias['@'] = resolve(__dirname, 'src')
        return config;
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true
            },
            {
                source: '/',
                destination: '/es',
                permanent: true,
                locale: false
            },
            // Redirect for 404 errors
            {
                source: '/:path*',
                destination: '/en/:path*',
                permanent: false,
                has: [
                    {
                        type: 'header',
                        key: 'x-prerender-revalidate',
                    },
                ],
            },
        ];
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
