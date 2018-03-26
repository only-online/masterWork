module.exports = (sequelize, DataTypes) => {
    let Slide_show;

    const schema = {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        img_url: DataTypes.STRING
    };

    Slide_show = sequelize.define(`${settings.connectArray.prefix}slide_show`, schema);

    return Slide_show;
};