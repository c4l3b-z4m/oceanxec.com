/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for static hosting on GitHub Pages
   */
  output: "export",

  /**
   * If you're using a custom domain, you can leave basePath empty
   * If your site will be at username.github.io/repo-name, set basePath: "/repo-name"
   */
  basePath: "", // Leave empty for custom domains or user sites
  
  /**
   * Disable server-based image optimization (not supported with static export)
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
