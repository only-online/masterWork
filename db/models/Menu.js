module.exports = (sequelize, DataTypes) => {
    let Menu;

    const schema = {
        id: DataTypes.INTEGER,
        sub_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    };

    Menu = sequelize.define(`${settings.connectArray.prefix}menu`, schema);

    return Menu;
};