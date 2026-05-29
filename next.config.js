/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 启用现代图片格式
    formats: ['image/avif', 'image/webp'],
    // 设备尺寸 breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // 图片尺寸 breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 图片最小过期时间（秒）
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // 禁用静态导入优化（使用默认行为）
    disableStaticImages: false,
  },
}

module.exports = nextConfig
