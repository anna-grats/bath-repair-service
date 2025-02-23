/** @type {import('next').NextConfig} */
const nextConfig = {
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
