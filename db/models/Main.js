module.exports = (sequelize, DataTypes) => {
    let Main;

    const schema = {
        id: DataTypes.INTEGER,
        createddate: DataTypes.DATE,
        changedate: DataTypes.DATE,
        creator: DataTypes.INTEGER,
        changer: DataTypes.INTEGER,
        deleted: DataTypes.TINYINT,
        categoty: DataTypes.STRING,
        label: DataTypes.STRING,
        description: DataTypes.TEXT
    };

    Main = sequelize.define(`${settings.connectArray.prefix}main`, schema);

    return Main;
};