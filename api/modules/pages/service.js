import PagesQueries from "./query"

const PagesServices = {
    allPages: (req, callback) => {
        PagesQueries.getAllPages(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    },

    onePage: (req, callback) => {
        PagesQueries.getOnePage(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    }
}

export default PagesServices;