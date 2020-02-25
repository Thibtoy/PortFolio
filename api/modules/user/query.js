import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
    register: (user) => {
        return new Promise(function(resolve, reject) {
            let q = "INSERT INTO `users` (username, email, password, role_name) VALUES ('"+user.username+"', '"+user.email+"', '"+user.password+"', 'USER');";
            let connection = db.create(db.conf, err => { if(err) reject('Error while connecting the database');} )

            connection.query(q, (err, data) => {
                connection.end()
                if (err) return (err.sqlState === '23000')? reject('User already exist') : reject('Something went wrong');
                else resolve('User successfully registered');
            });
        });
    }
}

export default Query