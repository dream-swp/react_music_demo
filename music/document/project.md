# 项目配置

* 配置 @ 文件路径

## 项目文件配置

* 可以直接 

### vite.config.ts 文件配置

* 安装 @types/node vite-tsconfig-paths 插件
* vite.config.ts 配置文件:

```ts
    // ....
    resolve: {
        tsconfigPaths: true,
    },

```

### tsconfig.app.json 文件配置

```json
 "compilerOptions": {
    // ....

    "paths": {
        "@/*": ["./src/*"]
     }
 }

```
