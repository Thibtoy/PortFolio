import PagesServices from './service';
import database from '../../setup/database';

const PagesController = {
    allPages : (req, res) => {
        PagesServices.allPages(req, result => {
        	result.success? res.status(200).send(result): res.status(404).send();
        });
    },

    onePage: (req, res) => {
    	PagesServices.onePage(req, result => {
    		result.success? res.status(200).send(result): res.status(404).send();
    	})
    }
}

export default PagesController;