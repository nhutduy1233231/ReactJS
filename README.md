# config init package

1.  yarn init --yes
2.  yarn add react react-dom
3.  yarn add -D @types/react @types/react-dom typescript
4.  yarn add -D webpack webpack-cli webpack-dev-server
5.  yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
6.  yarn add -D clean-webpack-plugin compression-webpack-plugin copy-webpack-plugin css-loader css-minimizer-webpack-plugin dotenv-webpack file-loader html-webpack-plugin mini-css-extract-plugin sass sass-loader serve webpack-bundle-analyzer

- clean-webpack-plugin: Dọn dẹp thư mục build
- compression-webpack-plugin: Nén gzip, brotli file build
- copy-webpack-plugin: Copy các file trong thư mục public vào thư mục dist
- css-loader: import css trong dự án
- css-minimizer-webpack-plugin: minify css
- dotenv-webpack: Giúp dùng được các biến môi trường trong file .env
- file-loader: import ảnh, font trong dự án
- html-webpack-plugin: Tự động thêm script và style tag vào file html
- mini-css-extract-plugin: Tách css ra thành file riêng khi build thay vì đưa vào file js
- sass: Giúp dùng sass cho dự án
- sass-loader: Cũng giúp dùng Sass cho dự án, phải cài cả 2 sass sass-loader
- serve: Giúp preview file build
- webpack-bundle-analyzer: Phân tích kích thước file build

7.  yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-webpack-plugin eslint-import-resolver-typescript
8.  yarn add eslint-import-resolver-alias --dev

# config source

- create file
  public/index.html
  .babelrc
  .browserslistrc
  .editorconfig
  .eslintrc.js
  .eslintignore
  .gitignore
  .prettierrc
  .prettierignore
  tsconfig.json
  webpack.config.js
  src/index.tsx
  src/react-app-env.d.ts
