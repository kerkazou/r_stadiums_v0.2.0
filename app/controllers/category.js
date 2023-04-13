const db = require('../models')

// Create Main Model
const SportsCategory = db.sportsCategory

module.exports = {
    GetAll: async (req, res, next) => {
        let error = new Error();
        try {
            await SportsCategory.find((err, result) => {
                if (err) {
                    error.message = 'Error: ' + err;
                    error.status = 400;
                    error.success = false;
                    return next(error);
                } else {
                    res.json({
                        success: true,
                        message: 'Success',
                        data: result,
                    })
                }
            })
        }
        catch (error) {
            next(error)
        }
    },
}
