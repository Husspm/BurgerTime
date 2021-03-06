console.log("CHEF pass");
module.exports = function(sequelize, DataTypes) {
    var Chef = sequelize.define("Chef", {
        chef_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Chef;
};