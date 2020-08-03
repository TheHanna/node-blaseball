export default {
  typescript: {
    rewritePaths: {
      "src/": "build/",
    },
  },
  files: ["src/**.spec.ts"],
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: false,
  verbose: true,
};
