module.exports = (sequelize, DataTypes) => {
    let Sub_menu;

    const schema = {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING

    Sub_menu = sequelize.define(`${settings.connectArray.prefix}sub_menu`, schema);

    return Sub_menu;
};