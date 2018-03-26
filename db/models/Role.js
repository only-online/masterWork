module.exports = (sequelize, DataTypes) => {
    let Role;

    const schema = {
        id: DataTypes.INTEGER,
        role_name: DataTypes.STRING,
        deleted: DataTypes.TINYINT,
        change: DataTypes.TINYINT,
        insert: DataTypes.TINYINT
    };

    Role = sequelize.define(`${settings.connectArray.prefix}role`, schema);

    return Role;
};