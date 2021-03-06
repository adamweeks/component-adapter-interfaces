/*
 * we use semantic-release to automate the whole
 * package release workflow and the options,
 * mode and plugins can be set here
 * more info: https://github.com/semantic-release/semantic-release
 */
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        writerOpts: {
          commitsSort: ["subject", "scope"]
        }
      }
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"]
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "package.json",
            label: "Package JSON"
          },
          {
            path: "dist/webexComponentAdapterInterfaces.cjs.js",
            label: "Common JS distribution"
          },
          {
            path: "dist/webexComponentAdapterInterfaces.umd.js",
            label: "Universal Module Definition JS distribution"
          },
          {
            path: "dist/webexComponentAdapterInterfaces.esm.js",
            label: "ECMAScript module JS distribution"
          }
        ]
      }
    ]
  ]
};
