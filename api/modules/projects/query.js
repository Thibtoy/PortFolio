import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
    getAllProjects: (param, successCallback, failureCallback) => {
        let q = "SELECT * FROM `projects`";
        let connection = db.create(db.conf, err => {
            if(err) throw err;
        })
        connection.query(q, (err, rows, fields, res) => {
            connection.end()
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return failureCallback("No projects.");
            }
        })
    }
}

export default Query