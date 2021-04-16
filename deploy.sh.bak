# 确保脚本抛出遇到的错误
set -e

yarn docs:build

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
# 脚本参考 http://wmm66.com/index/article/detail/id/62.html

# vuepress core.js err 
# yarn upgrade core-js@^2.6.11
# https://github.com/zpfz/vuepress-theme-antdocs/issues/5

# 文本搜索支持
# https://docsearch.algolia.com/apply/

git init
git add .
git commit -m 'deploy'
git remote add origin https://github.com/hoochanlon/reading-pm-by-lib.git
git checkout -b gh-pages
git push origin gh-pages -f

cd -