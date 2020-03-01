import UserServices from './service';
import database from '../../setup/database';

const UserController = {
    register : (req, res) => {
    	UserServices.register(req.body)
    		.then(response => {console.log(response);res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err));
    },

    authenticate: (req, res) => {
    	UserServices.authenticate(req.body)
    		.then(response => res.status(response.status).send(response))
    		.catch( err => res.status(err.status).send(err));
    },

    see: (req, res) => {
    	console.log(req);
    	res.status(200).send('hey it s all good')
    }
}

export default UserController;