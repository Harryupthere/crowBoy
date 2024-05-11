// /** @type {import('next').NextConfig} */
// const path = require('path');
// const webpack = require('webpack');

// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
//   optimizeFonts: false,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     unoptimized: true,
//   },
//   env: {
//     BASE_API_URL: process.env.BASE_API_URL
//       ? process.env.BASE_API_URL
//       : 'https://torktest.vercel.app/api',
//   },
//   publicRuntimeConfig: {
//     BASE_API_URL: process.env.BASE_API_URL
//       ? process.env.BASE_API_URL
//       : 'https://torktest.vercel.app/api',
//   },
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
//   webpack: (config) => {
//     // Add webpack plugins
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         Buffer: ['buffer', 'Buffer'],
//         process: 'process/browser'
//       })
//     );

//     // Update resolve fallback
//     config.resolve.fallback = {
//       fs: false,
//       constants: false,
//       querystring: false,
//       url: false,
//       path: false,
//       os: false,
//       http: require.resolve("http-browserify"),
//       https: require.resolve("https-browserify"),
//       zlib: false,
//       stream: require.resolve("stream-browserify"),
//       crypto: require.resolve("crypto-browserify"),
//       zlib: require.resolve('browserify-zlib')
//     };

//     return config;
//   }
// };

// module.exports = nextConfig;




//  // "clean": "rm -rf node_modules && rm -rf yarn.lock && yarn",
//     // "export": "next export"




/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL
      ? process.env.BASE_API_URL
      : 'https://torktest.vercel.app/api',
  },
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL
      ? process.env.BASE_API_URL
      : 'https://torktest.vercel.app/api',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // Add webpack plugins
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser'
      })
    );

    // Update resolve fallback
    config.resolve.fallback = {
      fs: false,
      constants: false,
      querystring: false,
      url: false,
      path: false,
      os: false,
      http: require.resolve("http-browserify"),
      https: require.resolve("https-browserify"),
      zlib: false,
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve('browserify-zlib')
    };

    return config;
  }
};

module.exports = nextConfig;
