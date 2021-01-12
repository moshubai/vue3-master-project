module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
      parser: "babel-eslint"
    },
    rules: {
      "semi": [0, 'always'],
      "prettier/prettier": [
        "error",
        {
          printWidth: 120, //换行的行长度
          tabWidth: 2, //指定每个缩进级别的空格数
          trailingComma: 'none', //多行使用拖尾逗号（默认none）
          eslintIntegration: true, //开启 Eslint 检测支持
          semi: false,
          singleQuote: true, //使用单引号
          jsxBracketSameLine: true //将>多行JSX元素放在最后一行的末尾
        }],
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
    overrides: [
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        env: {
          jest: true
        }
      }
    ]
  };
  