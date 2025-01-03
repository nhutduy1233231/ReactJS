const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Đầu vào của ứng dụng
  output: {
    filename: 'bundle.js', // Tên file đầu ra
    path: path.resolve(__dirname, 'dist'), // Thư mục chứa file đầu ra
    clean: true, // Xóa thư mục dist trước khi build lại
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Các file mà Webpack sẽ xử lý
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Xử lý các file .ts và .tsx
        use: 'ts-loader', // Dùng ts-loader để biên dịch TypeScript
        exclude: /node_modules/, // Không biên dịch thư mục node_modules
      },
      {
        test: /\.js$/, // Xử lý các file .js (đối với JSX)
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Dùng preset Babel cho ES6+ và React
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map', // Tạo source map cho việc debug dễ dàng hơn
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Thay contentBase bằng static
    port: 3000, // Cổng server
    hot: true, // Hỗ trợ hot reload
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML
    }),
  ],
};
