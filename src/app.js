const {envs} = require('./config/env')
const {starServer} = require('./server/server')

const main = () =>{
    starServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// funcion agnostica autoconvocada
// agnostica pq no tiene nombre
// autoconvocada pq la ejecutamos con los parentesis
(async() =>{
    main()
})()