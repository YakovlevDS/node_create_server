const http= require('http');
// http.createServer().listen(3000);
http.createServer(function(req,res){
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.setHeader("Content-Type","text/html; charset=utf8;");
    if (req.url=='/'){res.end('Main <b>Привет мир</b> Hello world');} 
    if (req.url == '/cat') { res.end('Category <h1>Hi!</h1> world') }
    console.log('Server start on port 3000...');
}
).listen(3000);
