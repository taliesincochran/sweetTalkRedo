module.exports = function(sequelize, DataTypes) {
	var Socket = sequelize.define('socket', {
		user: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		socketId: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	return Socket;
};