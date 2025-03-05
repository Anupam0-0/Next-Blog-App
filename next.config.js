module.exports = {
  // ...existing code...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/60x60/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/1280x720/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/400x400/**",
        search: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  // ...existing code...
};
