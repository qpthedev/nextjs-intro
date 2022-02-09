const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,

  // redirects example
  async redirects() {
    return [
      {
        source: "/old-site/:path*",
        destination: "/new-site/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
