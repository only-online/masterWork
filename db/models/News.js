module.exports = (sequelize, DataTypes) => {
    let News;

    const schema = {
        id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        sub_category_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        image_url: DataTypes.STRING,
        body: DataTypes.TEXT
    };

    News = sequelize.define(`${settings.connectArray.prefix}news`, schema);

    return News;
};