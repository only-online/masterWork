module.exports = (sequelize, DataTypes) => {
    let Galery;

    const schema = {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        url: DataTypes.STRING
    };

    Galery = sequelize.define(`${settings.connectArray.prefix}galery`, schema);

    return Galery;
};