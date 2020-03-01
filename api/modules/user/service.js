import UserQueries from "./query"
import bcrypt from 'bcrypt';
import config from '../../config/server';
import jwt from 'jsonwebtoken';

const UserServices = {
    register: body => {
    	return new Promise((resolve, reject) => {
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

    authenticate:  body => {
    	return new Promise((resolve, reject) => {
    		const {username, password, email} = body;
    		if (typeof username !== "string" || typeof password !== "string") 
            	reject({ status: 400, payload: { success: false, message: "All fields are required and must be a string type"}});
            UserQueries.getUser(body)
            	.then(async user => {
            		if (!await bcrypt.compare(password, user.password)) 
            			reject({status: 400, payload:{success: false, message: "Incorrect password"}});
            		let token = jwt.sign({id: user.id, role: user.role_name}, config.secret)
            		delete user.password
            		resolve({ status: 200, payload: { success: true, message: 'User connection', data:{ token, user } } });
            	})
            	.catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	});
    }

}

export default UserServices;