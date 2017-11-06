var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
/*测试结果
http://localhost:3000/Articles?name=Vindar&org=zh
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=Vindar&org=zh',
  query: { name: 'Vindar', org: 'zh' },
  pathname: '/Articles',
  path: '/Articles?name=Vindar&org=zh',
  href: '/Articles?name=Vindar&org=zh' }
*/