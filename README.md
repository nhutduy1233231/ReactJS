luôn cài đặt thành file LF:
    git config --global core.autocrlf false
    git config --global core.eol lf
    git rm -rf --cached
    git reset --hard HEAD

luôn luôn ưu tiên alias khi import:
    Settings => Import Module Specifier => non-relative

thêm thư viện  shadcn/UI:
    npx shadcn@latest init -d

thứ tự ưu tiên từ cao đến thấp: utilities -> components -> base 


1. rq -> server => html
2. browser thay link js, css  -> rq lan 2  => file js css
3. trinh duyet chay file js, css render ra UI
4. clint co the tuong tac voi UI

Lệnh cài package cơ bản
1. npm init -y
2. Cài đặt các dependencies cơ bản
    npm install react react-dom 
    npm install --save-dev @types/react @types/react-dom
3. npm install typescript --save-dev
4. Cài đặt Webpack và các plugin
    npm install webpack webpack-cli webpack-dev-server --save-dev
5. Cài đặt Babel để biên dịch mã JavaScript (React sử dụng JSX, và Babel giúp biên dịch JSX và ES6+)
    npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
6. Cài đặt TypeScript loader cho Webpack
    npm install ts-loader --save-dev
7. Cài đặt các plugin và cấu hình hỗ trợ TypeScript
    npm install html-webpack-plugin --save-dev


ESLint
