/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {

    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
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
