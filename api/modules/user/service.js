import UserQueries from "./query"
import bcrypt from 'bcrypt';

const UserServices = {
    register: async (body) => {
    	return new Promise(function(resolve, reject) {
    		const {username, password, email} = body;

    		if (typeof username !== "string" || typeof password !== "string" || typeof email !== "string") 
            	reject({ status: 400, payload: { success: false, message: "All fields are required and must be a string type"}});

    		bcrypt.genSalt()
    			.then(salt => bcrypt.hash(password, salt))
    			.then(hashedPassword => UserQueries.register({username, email, password: hashedPassword}))
    			.then(message => resolve({status: 201, payload: { success: true, message}}))
    			.catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	});
    },

    authenticate: (req, callback) => {
        callback({message: 'coucou', success: true});
    }
}

export default UserServices;