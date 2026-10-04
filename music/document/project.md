# 项目配置

- 配置 @ 文件路径

## 项目文件配置

- 可以直接

### vite.config.ts 文件配置

- 安装 @types/node vite-tsconfig-paths 插件
- vite.config.ts 配置文件:

```ts
    // ....
    resolve: {
        tsconfigPaths: true,
    },

```

---

### tsconfig.app.json 文件配置

```json
 "compilerOptions": {
    // ....

    "paths": {
        "@/*": ["./src/*"]
     }
 }

```

---

### CSS 重制

- 使用 .less 编写cass 和重制样式
- 安装 less 插件
- 安装 重制 normalize.css 样式
- 创建 assets/css/reset.less 重制自定义重制文件
- 在 主入口引入 重制 css 样式

```zsh
npm install -D less
npm install normalize.css
```

* reset.less:
  
```less
body, html, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, header, menu, section, p, input, td, th, ins {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: #333;
}

image {
    vertical-align: top;
}

ul,
li {
    list-style: none;
}

button {
    outline: none;
}
```

* main.tsx 引入文件
  
```tsx
// ....
import 'normalize.css'
import '@/assets/css/index.less'
// ... 

```

---
