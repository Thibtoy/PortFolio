import ProjectServices from './service';
import database from '../../setup/database';

const ProjectController = {
    allProjects : (req, res) => {
        ProjectServices.allProjects(req, result => {
        	result.success? res.status(200).send(result): res.status(404).send();
        });
    }
}

export default ProjectController;