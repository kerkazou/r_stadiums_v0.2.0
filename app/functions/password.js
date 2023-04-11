const bcryptjs = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    hashPassword: async (password) => {
        try {
            const salt = await bcryptjs.genSalt(saltRounds);
            const hash = await bcryptjs.hash(password, salt);
            return hash;
        }
        catch (error) {
            return error;
        }
    },
    comparePassword: async (password, hash) => {
        try {
            const result = await bcryptjs.compare(password, hash);
            console.log(result)
            return result;
        }
        catch (error) {
            return error;
        }
    }
}
