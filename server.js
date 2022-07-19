const http=require('http');
const { getKullanicilar,getKullanici,createKullanici,updateKullanici,deleteKullanici} = require('./controller/kulController');



const server=http.createServer((req,res)=>{
 if(req.url==='/api/kullanicilar'&& req.method==='GET')
 {
    getKullanicilar(req,res);
 }
 else if(req.url.match(/\/api\/kullanici\/([0-9]+)/)&& req.method==='GET'){

  const id=req.url.split('/')[3];
  getKullanici(req,res,id);

 }
 else if(req.url==='/api/kullanici'&&req.method==='POST'){
    createKullanici(req,res);

 }
 else if(req.url.match(/\/api\/kullanici\/([0-9]+)/)&&req.method==='PUT'){
    const id=req.url.split('/')[3];
    updateKullanici(req,res,id);

 }
 else if(req.url.match(/\/api\/kullanici\/([0-9]+)/)&&req.method==='DELETE'){
    const id=req.url.split('/')[3];
    deleteKullanici(req,res,id);

 }
 else{
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end(JSON.stringify({mesaj:'Yönlendirme geçersiz'}));
 }
});
const PORT=process.env.PORT||5000;
server.listen(PORT,()=>console.log(`server ${PORT} port no ile çalışıyor`));
