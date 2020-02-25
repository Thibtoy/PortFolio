import UserServices from './service';
import database from '../../setup/database';

const UserController = {
    register : (req, res) => {
    	UserServices.register(req.body)
    		.then(response => res.status(response.status).send(response.payload.message))
    		.catch( err => res.status(err.status).send(err.payload.message));
    },

    authenticate: (req, res) => {
    	UserServices.authenticate(req, result => {
    		result.success? res.status(200).send(result): res.status(404).send();
    	})
    }
}

export default UserController;