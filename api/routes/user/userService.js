const { model: User } = require('./userModel');

exports.listProjects = async () => {
    return await User.find({});
}
