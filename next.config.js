const path = require('path')

const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    // The app lives at the repo root. Pin the tracing root so Next doesn't walk
    // up and pick a stray lockfile in a parent directory as the workspace root.
    outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig
