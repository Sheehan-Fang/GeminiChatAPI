## 基于Gemini和Vercel平台的API封装



### 更新日志

**更新日期：2024年4月1日**

- 首次提交
- 实现了对Gemini API的文本访问



### **文件结构**

- index.js		功能入口
- package-lock.json	依赖配置文件
- package.json		依赖配置文件
- readme.md		项目介绍
- vercel.json		Vercel配置文件
- api			api路径文件夹
- testAPI		测试文件夹（非必须）




### 部署方法

- Vercel平台：https://vercel.com/
- gemini API申请：[Get API key | Google AI Studio](https://aistudio.google.com/app/apikey)
- 如果遇到报错Internal server error，说明你的网络不会魔法，可以按以下步骤解决：

1. 前往 [**palm-netlify-proxy**](https://github.com/antergone/palm-netlify-proxy) 仓库并点击其中的 **“Deploy With Netlify**。
2. 部署完成后，你将收到 Netlify 分配的域名 （例如 `https://xxx.netlify.app`）。
3. 在你的 **Gemini Pro Chat** 项目中，设置名为 `API_BASE_URL` 的环境变量，其值为部署 palm-proxy 时获得的域名 (`https://xxx.netlify.app`)。
4. 重新部署你的 **Gemini Pro Chat** 项目来完成配置。这应该可以解决问题。
