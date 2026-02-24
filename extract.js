const fs = require('fs'); const html = fs.readFileSync('temp.html', 'utf8'); const regex = /<img[^>]*Hero image slot[^>]*>/g; console.log(html.match(regex));
