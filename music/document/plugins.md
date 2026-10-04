# 项目插件配置

- 项目中一些插件配置

## prettier 插件配置

- 安装 prettier
- 项目中新增 .prettierrc 格式化规则
- 项目中新增 .prettierignore 忽略规则, 处理不需要格式化的文件

```zsh
# 安装 prettier
npm install prettier -D
```

```json
//  useTabs : 缩进不使用制表符（Tab），而是使用空格
//  tabWidth : 缩进的宽度为 4 个空格
//  printWidth: 一行代码的最大字符数为 100。超过 100 个字符时，Prettier 会自动换行
//  singleQuote: 字符串使用单引号（'），而不是双引号（"）
//  "trailingComma": "none"：多行对象、数组等结尾不添加尾随逗号。
//  "semi": false：语句结尾不自动添加分号（;）。

{
    "useTabs": false,
    "tabWidth": 4,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false
}
```

### package.json 文件配置

```json
"scripts": {
   // other....
  "prettier": "prettier --write ."
},
```

```zsh
# 执行 prettier, 格式话所有的文件
npm run prettier
```

---

## oxlint-tsgolint 插件配置

- 安装 oxlint-tsgolint 插件

```zsh
npm install -D oxlint-tsgolint
```

### 配置 .oxlintrc.json 文件

```json
{
    "$schema": "./node_modules/oxlint/configuration_schema.json",
    "plugins": ["typescript", "react", "import", "jsdoc", "node"],

    // 1. 定义代码运行环境，用于识别全局变量
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },

    // 2. 声明项目自定义的全局变量
    "globals": {
        "myCustomGlobal": "readonly",
        "analytics": "writable"
    },

    // 3. 配置需要忽略检查的文件
    "ignorePatterns": [
        "dist/**",
        "coverage/**",
        "*.min.js",
        "!dist/keep-this-file.js" // 使用 ! 取消忽略特定文件
    ],

    "rules": {
        "react/rules-of-hooks": "error",
        "react/only-export-components": ["warn", { "allowConstantExport": true }],
        "typescript/no-floating-promises": "error",
        "typescript/no-misused-promises": "error"
    },

    // 4. 为特定文件（如测试文件）覆盖规则
    "overrides": [
        {
            "files": ["*.test.ts", "*.spec.ts", "**/__tests__/**/*"],
            "rules": {
                "typescript/no-explicit-any": "off" // 测试文件中允许使用 any
            }
        }
    ],

    "options": {
        "typeAware": true,
        "typeCheck": true
    }
}
```

---
