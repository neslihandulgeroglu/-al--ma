var kullanicilar=require('../data/kulDB.json');
const {v4:uuidv4}=require('uuid');
const {dosyayaYaz}=require('../utils')
function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(kullanicilar);
    })

}
function findByID(id){
    return new Promise((resolve,reject)=>{
       const kullanici=kullanicilar.find((k)=>k.id===id);
       resolve(kullanici);
    });
}
function create(kullanici){
    return new Promise((resolve,reject)=>{
       const yeni={id:uuidv4(),...kullanici};
       kullanicilar.push(yeni);
       dosyayaYaz('./data/kulDB.json',kullanicilar)
       resolve(yeni);
    });

}
function update(id,kullanici){
    return new Promise((resolve,reject)=>{
       const index=kullanicilar.findIndex((k)=>k.id===id);
       kullanicilar[index]={id,...kullanici};
       dosyayaYaz('./data/kulDB.json',kullanicilar)
       resolve(kullanicilar[index]);
    });

}
function remove(id){
    return new Promise((resolve,reject)=>{
      kullanicilar=kullanicilar.filter((k)=>k.id!==id);
      dosyayaYaz('./data/kulDB.json',kullanicilar);
      resolve();
    });

}
module.exports={
    findAll,
    findByID,
    create,
    update,
    remove
    

}