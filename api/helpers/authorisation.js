import expressJwt from 'express-jwt';
import config from '../config/server';

const authorisation = (roles = new Array()) => {
	if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
    	 expressJwt({ secret: config.secret }),
    	  (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) 
                return res.status(401).json({ message: 'Unauthorized' });
            next();
        }
    ];
}

export default authorisation;