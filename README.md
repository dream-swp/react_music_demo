#### react_music_demo

* 是一个 react 学习项目

#### 技术栈

* 使用的是 React + TypeScript + Vite =>  [React + TypeScript + Vite](/music/README.md)


#### 项目文件配置

##### vite.config.ts 文件配置

* 安装 @types/node vite-tsconfig-paths 插件
* vite.config.ts 配置文件: 

```ts
    // ....
    resolve: {
        tsconfigPaths: true,
    },

```

#### tsconfig.app.json 文件配置

```json
 "compilerOptions": {
    // ....
    
    "paths": {
        "@/*": ["./src/*"]
     }
 }

```

#### 插件使用

```zsh
npm install -D @types/node vite-tsconfig-paths

```
