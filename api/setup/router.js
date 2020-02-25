import express from "express";
import projectRoutes from "../modules/projects/routes";
import pagesRoutes from "../modules/pages/routes";
import usersRoutes from "../modules/user/routes";


const Router = (app) => {
    var apiRoutes = express.Router();

    // Home route. We'll end up changing this to our main front end index later.
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.');
    });

    //Project router
    app.use('/api', apiRoutes);

    app.use('/api/project', projectRoutes);
    app.use('/api/pages', pagesRoutes);
    app.use('/api/user', usersRoutes);
}

export default Router
