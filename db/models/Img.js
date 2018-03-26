module.exports = (sequelize, DataTypes) => {
    let Img;

    const schema = {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    };

    Img = sequelize.define(`${settings.connectArray.prefix}img`, schema);

    return Img;
};