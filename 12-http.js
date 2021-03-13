const http=require('http');
const server=http.createServer((req,res)=>{
   if (req.url==='/'){
       res.end('welcome to our home page')
   }
   if (req.url==='/about'){
       res.end('here is our short intro')
   }
   res.end(`
   <h1>Opps!</h1>
   <p> cant find it </p>`)

})

server.listen(5000)