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