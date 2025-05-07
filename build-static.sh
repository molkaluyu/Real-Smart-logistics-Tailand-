#!/bin/bash

# 清理旧的构建文件
rm -rf out

# 安装依赖
npm install

# 构建静态网站
npm run build

# 输出构建信息
echo "静态网站已生成在 'out' 目录中"
echo "您可以将 'out' 目录中的文件部署到任何静态网站托管服务，如 Vercel, Netlify, GitHub Pages 等"
