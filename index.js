const jsonServer = require('json-server')
const MPServer =  jsonServer.create()
const middlewre =  jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('storage.json')

MPServer.use(middlewre)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Mpserver started at port : ${PORT} and waiting for client request!!!`);
    
})