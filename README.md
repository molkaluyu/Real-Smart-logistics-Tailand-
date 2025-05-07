# Real Smart Logistics (Thailand) 静态网站

这是一个使用 Next.js 构建的可扩展静态网站。

## 特点

- 完全静态生成，可部署到任何静态托管服务
- 双语支持（英语和泰语）
- 响应式设计，适用于所有设备
- 基于 JSON 的内容管理，便于更新
- 使用 Tailwind CSS 进行样式设计

## 如何扩展

### 添加新服务

1. 编辑 `data/services.json` 文件
2. 添加新的服务条目，包括 ID、图标、标题、描述和图片
3. 重新构建网站

### 更新内容

1. 编辑相应的 JSON 文件：
   - `data/services.json` - 服务内容
   - `data/strengths.json` - 公司优势
   - `data/contact.json` - 联系信息
2. 重新构建网站

### 添加新页面

1. 在 `app` 目录中创建新的页面文件
2. 更新导航菜单（`components/header.tsx`）
3. 重新构建网站

## 构建和部署

\`\`\`bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态网站
npm run build

# 本地预览构建结果
npm run start
\`\`\`

构建完成后，`out` 目录中的文件可以部署到任何静态网站托管服务，如 Vercel、Netlify、GitHub Pages 等。
