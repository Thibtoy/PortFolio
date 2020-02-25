import db from "../../setup/database";

const Query = {
    register: (user) => {
        return new Promise(function(resolve, reject) {
            let q = "INSERT INTO `users` (username, email, password, role_name) VALUES ('"+user.username+"', '"+user.email+"', '"+user.password+"', USER);";
            let connection = db.create(db.conf, err => { if(err) reject('Error while connecting the database');} )

            connection.query(q, (err, data) => {
                connection.end()
                if (err) (err.sqlState === '23000')? reject('User already exist') : reject('Something went wrong');
                else resolve('User successfully registered');
            });
        });
    }
}

export default Query