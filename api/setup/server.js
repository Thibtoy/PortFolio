import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import router from "./router"

const server = (server) => {
    console.info('SETUP - Loading modules...')

    

    // Request body parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    // Request body cookie parser
    server.use(cookieParser())

    server.use(morgan('tiny'))
    // Enable CORS
    server.use(function(req, res, next){
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    // Initializing our routes
    router(server);
}

export default server;